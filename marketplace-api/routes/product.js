const express = require("express");

const { create, getAll } = require("../controllers/product");

const router = express.Router();

router.get("/getAll", getAll);
router.post("/create", create);

module.exports = router;
