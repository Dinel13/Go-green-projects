const express = require("express");

const { create, getAll } = require("../controllers/product");
const { authMiddleware } = require("../middleware/auth");

const router = express.Router();

router.get("/getAll", getAll);
router.post("/create", authMiddleware, create);

module.exports = router;
