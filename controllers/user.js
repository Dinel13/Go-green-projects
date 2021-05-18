const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const User = require("../models/user");
const HttpError = require("../models/http-error");

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    return next(new HttpError("Gagal mendaftar, coba lagi nanti", 500));
  }

  if (existingUser) {
    return next(new HttpError("User sudah ada, silahkan masuk", 422));
  }

  let HasPassword;
  try {
    HasPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError("Gagal mendaftar, coba lagi nati", 500);
    return next(error);
  }

  const createuser = new User({
    name,
    email,
    password: HasPassword,
  });

  let result;
  try {
    result = await createuser.save();
  } catch (err) {
    return next(new HttpError("Gagal mendaftar, coba lagi nanti", 500));
  }

  let token;
  try {
    token = jwt.sign(
      { userId: createuser.id, email: createuser.email },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );
  } catch (error) {
    return next(new HttpError("Gagal mendaftar, coba lagi nanti", 500));
  }

  res
    .status(201)
    .json({ userId: createuser.id, name: createuser.name, token: token });
};

exports.signup = signup;
