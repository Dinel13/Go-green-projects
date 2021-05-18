const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoute = require("./routes/user");

const app = express();

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: false, limit: "20mb" }));

app.use(cors("*"));

app.use("/", (req, res, next) => {
  res.status(200).json({ message: "api is working" });
});

app.use("/api/user", userRoute);

const url = "mongodb://127.0.0.1:27017/green-project";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(process.env.PORT || 8080);
  })
  .catch((err) => console.log(err));
