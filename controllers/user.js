const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

require("dotenv").config();

const User = require("../models/User");
const HttpError = require("../models/http-error");

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findByEmail(email);
  } catch (err) {
    return next(new HttpError("Gagal mendaftar, coba lagi nanti", 500));
  }

  if (existingUser && existingUser[0].length !== 0) {
    return next(new HttpError("User sudah ada, silahkan masuk", 422));
  }

  let HasPassword;
  try {
    HasPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError("Gagal mendaftar, coba lagi nati", 500);
    return next(error);
  }

  const createuser = new User(null, name, email, HasPassword);

  let result;
  try {
    result = await createuser.save();    
  } catch (err) {
    return next(new HttpError("Gagal mendaftar, coba lagi nanti", 500));
  }

  let saveUser;
  try {
    saveUser = await User.findByEmail(email);
  } catch (err) {
    return next(new HttpError("Gagal mendaftar, coba lagi nanti", 500));
  }

  let token;
  try {
    token = jwt.sign(
      { userId: saveUser[0][0].id, email: saveUser[0][0].email },
      process.env.JWT_KEY,
      { expiresIn: "100d" }
    );
  } catch (error) {
    return next(new HttpError("Gagal mendaftar, coba lagi nanti", 500));
  }

  res
    .status(201)
    .json({ userId: saveUser[0][0].id, name: saveUser[0][0].name, token: token });
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

  if (existingUser[0].length === 0) {
    const error = new HttpError("Credentials tidak cocok.", 401);
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(
      password,
      existingUser[0][0].password
    );
  } catch (err) {
    console.log(err);
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
    userId: existingUser[0][0].id,
    name: existingUser[0][0].name,
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

  if (user[0].length === 0) {
    const error = new HttpError("Email tidak ditemukan, silahkan mendaftar.", 404);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { email: user[0][0].email },
      process.env.JWT_RESET_PASSWORD,
      {
        expiresIn: "10m",
      }
    );
  } catch (err) {
    const error = new HttpError("Tidak bisa mereset, coba lagi nanti.", 500);
    return next(error);
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    },
  });
  
  const mailOptions = {
    from: "fadullah2021@gmail.com",
    to: email,
    subject: "Invoices due",
    html: '<h1>this is a test mail.</h1>'// plain text body
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return next();
    } else {
      console.log("Email sent: " + info.response);
      return res.status(201).json({ message: `Email untuk mereset telah dikirim ke alamat ${email}. Link akan kadarluarsa dalam 10 menit.`});
    }
  });

  
};

exports.signup = signup;
exports.login = login;
exports.forgotPassword = forgotPassword;
