const express = require("express");
const router = express.Router();
const tokenController = require("../controller/index");

router.get("/token", tokenController.generateToken);

module.exports = router;
