const Category = require("../models/Category");

const categoryController = {
  //[POST] /category/create
  createCategory: async (req, res) => {
    try {
      const category = new Category(req.body);
      await category.save();
      return res.status(200).json(category);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  //[GET] /category
  getCategory: async (req, res) => {
    try {
      const cates = await Category.find();
      return res.status(200).json(cates);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = categoryController;
