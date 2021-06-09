const express = require("express");

const userController = require("../controllers/user");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/reset", userController.forgotPassword);
router.post("/reset/:token", userController.setNewPassword);
router.post("/cekAuth", userController.cekAuth);

module.exports = router;
