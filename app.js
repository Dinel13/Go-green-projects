const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const HttpError = require("./models/http-eror");
const productRoutes = require("./routes/product");

require("dotenv").config();

const app = express();

app.use(express.json({ limit: "40mb" }));
app.use(express.urlencoded({ extended: false, limit: "40mb" }));

app.use(cors("*"));

app.get("/test", (req, res, next) => {
  res.status(200).json({ message: "api is working" });
});

app.use("/product", productRoutes);

app.use((req, res, next) => {
  return next(new HttpError("Route Tidak ditemukan", 404));
});

app.use((error, req, res, next) => {
  res
    .status(error.code || 500)
    .json({ message: error.message || "error tidak diketahui" });
});

// app.listen(process.env.PORT || 8080);

mongoose
  .connect(
    "mongodb+srv://admin:B21-cap0199@cluster0.8hkht.mongodb.net/goproject?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((result) => {
    app.listen(process.env.PORT || 8080);
  })
  .catch((err) => console.log(err));
