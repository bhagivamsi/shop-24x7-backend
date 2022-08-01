//Libraries
var express = require("express");
var router = express.Router();

//Checks
const { registerJsonChecks, loginJsonChecks } = require("../Common/Constants");

//Handlers
const {categoriesListHandler} = require('../handlers/category/categoriesHandler')

router.post("/categories", categoriesListHandler());
// router.post("/products", loginJsonChecks, loginHandler());

module.exports = router;
