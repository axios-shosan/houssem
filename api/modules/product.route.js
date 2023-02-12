const express = require("express");
const { createProduct } = require("./prduct.controller");
const router = express.Router();

router.post("/", createProduct);

module.exports = router;
