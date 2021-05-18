const express = require("express");

const userController = require("../controllers/user");

const router = express.Router();

router.post("/signup", userController.signup);

module.exports = router;
