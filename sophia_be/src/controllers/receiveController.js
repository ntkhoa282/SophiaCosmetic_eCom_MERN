const Product = require("../models/Product");
const Receive = require("../models/Receive");

const receiveController = {
  updateQuantityImport: async (id, quantity) => {
    const prod = await Product.findById(id);
    prod.quantity += quantity;
    await prod.save();
  },
  //[POST] /receive/add-receive
  addReceive: async (req, res) => {
    const newReceive = await new Receive(req.body);
    try {
      const savedReceive = await newReceive.save();
      newReceive.productsImport.forEach(
        async (prod) =>
          await receiveController.updateQuantityImport(
            prod.productId.toString(),
            prod.quantityImport
          )
      );
      return res.status(200).json(savedReceive);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  //[GET] /receive/get-receive
  getReceive: async (req, res) => {
    try {
      const receives = await Receive.find();
      return res.status(200).json(receives);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = receiveController;
