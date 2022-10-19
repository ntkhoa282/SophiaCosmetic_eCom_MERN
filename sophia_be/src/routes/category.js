const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categoryController");

//create category
router.post("/create", categoryController.createCategory);
//get category
router.get("/", categoryController.getCategory);

module.exports = router;
