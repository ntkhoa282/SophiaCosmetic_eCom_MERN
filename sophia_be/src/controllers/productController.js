const Product = require("../models/Product");
const fs = require("fs");

const productController = {
  //[POST] //product/add
  addProduct: async (req, res) => {
    try {
      const newProd = new Product({
        title: req.body.title,
        desc: req.body.desc,
        image: {
          data: fs.readFileSync("src/productimgs/" + req.file.filename),
          contentType: "image/png",
        },
        price: req.body.price,
        quantity: req.body.quantity,
        sold: req.body.sold,
        option: req.body.option,
        inStock: req.body.inStock,
        category: req.body.category,
      });
      await newProd.save();
      res.status(200).json(newProd);
    } catch (error) {
      console.log(error);

      return res.status(500).json(error);
    }
  },
  //[GET] /product/all-products
  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find().populate("category");
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  //[GET] /product/:id
  getProductById: async (req, res) => {
    try {
      const prod = await Product.findById(req.params.id).populate("category");
      return res.status(200).json(prod);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  //[GET] /product/newest (4)
  getNewestProducts: async (req, res) => {
    try {
      const newestProd = await Product.find({ inStock: true })
        .sort({ createdAt: -1 })
        .limit(4)
        .populate("category");
      return res.status(200).json(newestProd);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  //[GET] /product/bestsold (4)
  getBestSoldProducts: async (req, res) => {
    try {
      const bestSoldProd = await Product.find({ inStock: true })
        .sort({ sold: -1 })
        .limit(4)
        .populate("category");
      return res.status(200).json(bestSoldProd);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  //[GET] /product/[query]
  findProductByCategory: async (req, res) => {
    const queryCategory = req.query.cate;
    try {
      const products = await Product.find({
        category: {
          $in: queryCategory,
        },
      }).populate("category");
      return res.status(200).json(products);
    } catch (error) {
      return res.status(404).json(error);
    }
  },
  //[GET] /product/search?(query)
  searchProduct: async (req, res) => {
    const queryName = req.query.q;
    try {
      const prods = await Product.find({
        title: new RegExp(queryName, "i"),
      }).populate("category");
      return res.status(200).json(prods);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  //[PATCH] /product/update/:id
  updateProduct: async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      return res.status(200).json(updatedProduct)
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = productController;
