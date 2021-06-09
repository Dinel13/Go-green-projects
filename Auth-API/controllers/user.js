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

  if (!email || !password) {
    return next(new HttpError("Gagal masuk, Semua field harus terisi", 401));
  }

  let existingUser;
  try {
    existingUser = await User.findByEmail(email);
  } catch (err) {
    const error = new HttpError(
      "Gagal mendapatkan data user, coba lagi nanti.",
      500
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      "Email tidak ditemukan, silahkan mendaftar dulu.",
      401
    );
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      "Tidak bisa memeriksa password, coba lagi nanti.",
      500
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError(
      "Password tidak sesuai, pastikan password kamu betul.",
      401
    );
    return next(error);
  }

  let token;
  try {
    token = await jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      process.env.JWT_KEY,
      { expiresIn: "10d" }
    );
  } catch (err) {
    const error = new HttpError(
      "Tidak bisa membuat token, coba lagi nanti.",
      500
    );
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

  if (!email) {
    return next(new HttpError("Gagal masuk, Email harus terisi", 401));
  }

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
      expiresIn: "10m",
    });
  } catch (err) {
    const error = new HttpError(
      "Tidak bisa membuat token, coba lagi nanti.",
      500
    );
    return next(error);
  }
  // for testing
  // console.log(`
  //   <h2>Hi, ${user.name} </h2>
  //   <h4>Kamu telah meminta untuk mereset password</h4>
  //   <p>Klik tautan ini <a href="https://frontend-rupnuawd4a-et.a.run.app/reset-password/${token}">link reset password</a> untuk membuat password baru.</p>
  // `);
  // return res.status(200).json({ pk: token });

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
    subject: "Go project || Password reset",
    html: `
    <h2>Hi, ${user.name}</h2>
    <h4>Kamu telah meminta untuk mereset password</h4>
    <p>Klik tombol dibawah untuk membuat password baru.</p>
    <a
      href="https://frontend-rupnuawd4a-et.a.run.app/reset-password/${token}"
      style="
        padding: 8px 10px;
        text-decoration: none;
        color: black;
        font-weight: 700;
        background-color: #278a27;
        border-radius: 8px;
      "
    >
      reset password
    </a>
    <p>jika link diatas tidak berfunsi, maka gunakan link dibawah ini</p>
    
    <a href="https://frontend-rupnuawd4a-et.a.run.app/reset-password/${token}"
      >https://frontend-rupnuawd4a-et.a.run.app/reset-password/${token}</a
    >
    <br />
    <h4>Terima kasih</h4>
    <p>Team Manut || B21-CAP1099</p>p>
    `,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return next(
        new HttpError("Tidak bisa mengirim email, coba lagi nanti.", 500)
      );
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

  if (!token) {
    return next(
      new HttpError("Token tidak tersedia, pastikan link anda betul", 401)
    );
  }

  if (!newPassword || !newPasswordConf) {
    return next(
      new HttpError("Gagal mereset password, pastikan semua field terisi", 401)
    );
  }

  if (newPassword !== newPasswordConf) {
    return next(
      new HttpError("Passoword harus sama dengan konfirmasi password", 401)
    );
  }

  let decodedToken;
  try {
    decodedToken = await jwt.verify(
      token.toString(),
      process.env.JWT_RESET_PASSWORD
    );
  } catch (error) {
    const err = new HttpError(
      "Tidak bisa memverifikasi token, token hanya berumur 10 menit setelah digenerate.",
      500
    );
    return next(err);
  }

  if (!decodedToken) {
    const err = new HttpError(
      "Token sudah expire, token hanya berumur 10 menit setelah digenerate.",
      404
    );
    return next(err);
  }

  let HasPassword;
  try {
    HasPassword = await bcrypt.hash(newPassword, 12);
  } catch (err) {
    const error = new HttpError(
      "Gagal mengengrisi password baru, coba lagi nati",
      500
    );
    return next(error);
  }

  let user;
  try {
    user = await User.updatePassword(HasPassword, decodedToken.email);
  } catch (error) {
    const err = new HttpError(
      "Tidak bisa mengupdate password baru, coba lagi nanti.",
      500
    );
    return next(err);
  }
  res.status(201).json({
    message: "berhasil mereset password",
  });
};

const cekAuth = async (req, res, next) => {
  try {
    const token = req.body.token;
    if (!token) {
      throw new Error("Anda tidak dikenali!");
    }
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    if (!decodedToken) {
      return next(new HttpError("anda tidak dikenali, login lagi", 401));
    }
    const user = await User.findByEmail(decodedToken.email);
    res.status(200).json({ user: user });
  } catch (error) {
    return next(new HttpError(error || "Anda tidak dikenali,!", 401));
  }
};

exports.signup = signup;
exports.login = login;
exports.forgotPassword = forgotPassword;
exports.setNewPassword = setNewPassword;
exports.cekAuth = cekAuth;
