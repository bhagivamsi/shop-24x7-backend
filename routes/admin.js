//Libraries
var express = require("express");
var router = express.Router();

//Checks
const { productsCreateCheck } = require("../Common/Constants");

//Handlers
const {
  productsCreateHandler,
} = require("../handlers/product/productsCreateHandler");
const auth = require("../middleware/auth");

router.post("/products", auth,productsCreateCheck, productsCreateHandler());

module.exports = router;
