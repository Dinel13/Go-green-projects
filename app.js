const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const HttpError = require("./models/http-eror");

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

const url = "mongodb://127.0.0.1:27017/goproject";
mongoose
  .connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    //  `mongodb+srv://${process.env.MONGGODB_USER_PASSWORD}@cluster0.enucz.mongodb.net/genbi?retryWrites=true&w=majority`
  )
  .then((result) => {
    app.listen(process.env.PORT || 5000);
  })
  .catch((err) => console.log(err));
