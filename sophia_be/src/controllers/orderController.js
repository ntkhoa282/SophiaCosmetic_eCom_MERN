const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Product = require("../models/Product");

const orderController = {
  updateQuantity: async (id, quantity) => {
    const prod = await Product.findById(id);
    prod.quantity -= quantity;
    prod.sold += quantity;
    await prod.save();
  },
  //[POST] /order/createorder
  createOrder: async (req, res) => {
    const newOrder = await new Order(req.body);
    try {
      const savedOrder = await newOrder.save();
      await Cart.findOne({ userID: req.body.userID }).updateMany({
        products: [],
      });
      newOrder.products.forEach(
        async (prod) =>
          await orderController.updateQuantity(
            prod.productId.toString(),
            prod.quantity
          )
      );
      return res.status(200).json(savedOrder);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = orderController;
