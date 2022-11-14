const Cart = require("../models/Cart");
const Order = require("../models/Order");

const orderController = {
  //[POST] /order/createorder
  createOrder: async (req, res) => {
    const newOrder = await new Order(req.body);
    try {
      const savedOrder = await newOrder.save();
      await Cart.findOne({ userID: req.body.userID }).update({
        products: [],
      });
      return res.status(200).json(savedOrder);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = orderController;
