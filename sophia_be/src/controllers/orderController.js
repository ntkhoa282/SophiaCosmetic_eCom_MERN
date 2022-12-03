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

  updateQuantityFailed: async (id, quantity) => {
    const prod = await Product.findById(id);
    prod.quantity += quantity;
    prod.sold -= quantity;
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
      /*newOrder.products.forEach(
        async (prod) =>
          await orderController.updateQuantity(
            prod.productId.toString(),
            prod.quantity
          )
      );*/
      return res.status(200).json(savedOrder);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  //[GET] /order/userorder/:id
  getUserOrder: async (req, res) => {
    try {
      const userOrder = await Order.find({ userID: req.params.id })
        .sort({ createdAt: -1 })
        .populate({
          path: "products",
          populate: {
            path: "productId",
          },
        });
      return res.status(200).json(userOrder);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  //[PUT] /order/updatestatus?query
  updateOrderStatus: async (req, res) => {
    const id = req.query.id;
    const status = req.query.status;
    const userid = req.query.userid;
    try {
      await Order.findOne({ _id: id }).updateOne({
        status: status,
      });
      const orderUpdated = await Order.find({ userID: userid })
        .sort({ createdAt: -1 })
        .populate({
          path: "products",
          populate: {
            path: "productId",
          },
        });
      return res.status(200).json(orderUpdated);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  //[GET] /order?status=?
  getOrdersByStatus: async (req, res) => {
    const status = req.query.status;
    try {
      const ordersList = await Order.find({ status: status })
        .sort({
          createdAt: 1,
        })
        .populate("userID");
      return res.status(200).json(ordersList);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  //[GET] /order/:id
  getOrderById: async (req, res) => {
    const oid = req.params.id;
    try {
      const orderDetail = await Order.findById(oid)
        .populate({
          path: "products",
          populate: {
            path: "productId",
          },
        })
        .populate("userID");
      return res.status(200).json(orderDetail);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  //[PUT] /order/admin-updatestatus?oid=?&status=?
  adUpdateOrderStatus: async (req, res) => {
    const oid = req.query.oid;
    const status = req.query.status;
    try {
      const order = await Order.findByIdAndUpdate(oid, { status: status });

      const ordUpdated = await Order.findById(oid)
        .populate({
          path: "products",
          populate: {
            path: "productId",
          },
        })
        .populate("userID");

      if (status === "confimred") {
        order.products.forEach(
          async (prod) =>
            await orderController.updateQuantity(
              prod.productId.toString(),
              prod.quantity
            )
        );
      } else if (status === "failed") {
        order.products.forEach(
          async (prod) =>
            await orderController.updateQuantityFailed(
              prod.productId.toString(),
              prod.quantity
            )
        );
      }

      return res.status(200).json(ordUpdated);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = orderController;
