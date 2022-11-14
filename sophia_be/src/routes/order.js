const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

//create user order
router.post("/createorder", orderController.createOrder);

module.exports = router;
