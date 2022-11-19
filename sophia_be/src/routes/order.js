const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

//create user order
router.post("/createorder", orderController.createOrder);
//update order status
router.put("/updatestatus", orderController.updateOrderStatus);
//get user order
router.get("/userorder/:id", orderController.getUserOrder);

module.exports = router;
