const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

require("dotenv").config();

const User = require("../models/User");
const HttpError = require("../models/http-error");

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(
      new HttpError("Gagal mendaftar, Semua field harus terisi", 401)
    );
  }

  let existingUser;
  try {
    existingUser = await User.findByEmail(email);
  } catch (err) {
    return next(new HttpError("Gagal mendaftar, coba lagi nantit", 500));
  }

  if (existingUser) {
    return next(new HttpError("User sudah ada, silahkan masuk", 422));
  }

  let HasPassword;
  try {
    HasPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError(
      "Gagal engkripsi password, coba lagi nanti",
      500
    );
    return next(error);
  }

  const createuser = new User(null, name, email, HasPassword);

  let result;
  try {
    result = await createuser.save();
  } catch (err) {
    return next(new HttpError("Gagal menyimpan data, coba lagi nanti", 500));
  }

  let saveUser;
  try {
    saveUser = await User.findByEmail(email);
  } catch (err) {
    return next(
      new HttpError(
        "Gagal mendapatkan data yang disimpan, coba lagi nanti",
        500
      )
    );
  }

  let token;
  try {
    token = await jwt.sign(
      { userId: saveUser.id, email: saveUser.email },
      process.env.JWT_KEY,
      { expiresIn: "10d" }
    );
  } catch (error) {
    console.log(error);
    return next(new HttpError("Gagal membuat token, coba lagi nanti", 500));
  }

  res.status(201).json({
    userId: saveUser.id,
    name: saveUser.name,
    token: token,
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findByEmail(email);
  } catch (err) {
    const error = new HttpError("Gagal masuk, coba lagi nanti.", 500);
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError("Credentials tidak cocok.", 401);
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError("Tidak bisa masuk, coba lagi nanti.", 500);
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError(
      "Tidak bisa masuk, Pastikan password kamu betul.",
      401
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      process.env.JWT_KEY,
      { expiresIn: "100d" }
    );
  } catch (err) {
    const error = new HttpError("Tidak bisa masuk, coba lagi nanti.", 500);
    return next(error);
  }

  res.json({
    userId: existingUser.id,
    name: existingUser.name,
    token: token,
  });
};

const forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  let user;
  try {
    user = await User.findByEmail(email);
  } catch (err) {
    const error = new HttpError("Gagal menemukan email, coba lagi nanti.", 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError(
      "Email tidak ditemukan, silahkan mendaftar.",
      404
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign({ email: user.email }, process.env.JWT_RESET_PASSWORD, {
      expiresIn: "20m",
    });
  } catch (err) {
    const error = new HttpError("Tidak bisa mereset, coba lagi nanti.", 500);
    return next(error);
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  const mailOptions = {
    from: "fadullah2021@gmail.com",
    to: email,
    subject: "Password reset",
    html: `
      <p>Kamu telah meminta untuk mereset password</p>
      <p>KLik tautan ini <a href="http://localhost:3000/reset/${token}">link</a> untuk membuat password baru.</p>
    `,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return next();
    } else {
      return res.status(201).json({
        message: `Email untuk mereset telah dikirim ke alamat ${email}. Link akan kadarluarsa dalam 10 menit.`,
        // token: token,
      });
    }
  });
};

const setNewPassword = async (req, res, next) => {
  const token = req.params.token;
  const { newPassword, newPasswordConf } = req.body;

  if (newPassword !== newPasswordConf) {
    return next(
      new HttpError("passoword harus sama dengan konfirmasi password", 401)
    );
  }

  let decodedToken;
  try {
    decodedToken = await jwt.verify(
      token.toString(),
      process.env.JWT_RESET_PASSWORD
    );
  } catch (error) {
    const err = new HttpError("Tidak bisa mereset, coba lagi nantit.", 500);
    return next(err);
  }

  if (!decodedToken) {
    const err = new HttpError("Token sudah expire, coba lagi nanti.", 500);
    return next(err);
  }

  let HasPassword;
  try {
    HasPassword = await bcrypt.hash(newPassword, 12);
  } catch (err) {
    const error = new HttpError("Gagal mereset, coba lagi nati", 500);
    return next(error);
  }

  let user;
  try {
    user = await User.updatePassword(HasPassword, decodedToken.email);
  } catch (error) {
    const err = new HttpError("Tidak bisa mereset, coba lagi nanti.", 500);
    return next(err);
  }
  res.status(201).json({
    message: "berhasil mereset password",
  });
};

exports.signup = signup;
exports.login = login;
exports.forgotPassword = forgotPassword;
exports.setNewPassword = setNewPassword;
