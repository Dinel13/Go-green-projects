const axios = require("axios");

const HttpEror = require("../models/http-eror");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error("Anda tidak dikenali!");
    }
    const result = await axios.post(
      "https://our-philosophy-314515.et.r.appspot.com/api/user/cekAuth",
      { token: token }
    );
    const data = result.json();
    if (!Response.ok) {
      return next(new HttpEror(data.message, 500));
    }
    req.userData = data;
    next();
  } catch (error) {
    return next(new HttpEror(error, 500));
  }
};

exports.authMiddleware = authMiddleware;
