const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const HttpError = require("./models/http-eror");

require("dotenv").config();

const app = express();

app.use(express.json({ limit: "40mb" }));
app.use(express.urlencoded({ extended: false, limit: "40mb" }));

app.use(cors("*"));

app.use("/test", (req, res, next) => {
  res.status(200).json({ message: "api is working" });
});

app.use((req, res, next) => {
  return next(new HttpError("Route Tidak ditemukan", 404));
});

app.use((error, req, res, next) => {
  res
    .status(error.code || 500)
    .json({ message: error.message || "error tidak diketahui" });
});

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(process.env.PORT || 5000);
  })
  .catch((err) => console.log(err));
