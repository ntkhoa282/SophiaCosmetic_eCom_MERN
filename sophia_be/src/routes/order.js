const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

//create user order
router.post("/createorder", orderController.createOrder);
//update order status
router.put("/updatestatus", orderController.updateOrderStatus);
//admin update order status
router.put("/admin-updatestatus", orderController.adUpdateOrderStatus);
//get user order
router.get("/userorder/:id", orderController.getUserOrder);
//get an order by id
router.get("/:id", orderController.getOrderById);
//get orders list by status
router.get("/", orderController.getOrdersByStatus);

module.exports = router;
