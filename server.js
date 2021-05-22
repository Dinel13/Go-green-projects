const express = require("express");
const cors = require("cors");

const userRoute = require("./routes/user");

const app = express();

app.use(express.json({ limit: "40mb" }));
app.use(express.urlencoded({ extended: false, limit: "40mb" }));

app.use(cors("*"));

app.use("/test", (req, res, next) => {
  res.status(200).json({ message: "api is working" });
});

app.use("/api/user", userRoute);

//sync to singkronus model yang didefine dengan di database
//jika tidak ada tabel di database akan dibaut dari model
// sequelize
//   .sync()
//   .then((res) => {})
//   .catch((err) => console.log(err));

app.listen(process.env.PORT || 8081);

