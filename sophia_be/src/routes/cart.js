const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

//create user cart
router.post("/create", cartController.createCart);
//user add to cart
router.post("/addtocart", cartController.addToCart);
//del a product in cart
router.put("/deleteitem", cartController.deleteProductInCart);
//get cart of user
router.get("/user-cart/:id", cartController.getUserCart);

module.exports = router;
