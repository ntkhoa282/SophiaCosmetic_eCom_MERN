const User = require("../models/User");

const userController = {
  //[GET] /user get-all-users
  getAllUsers: async (req, res) => {
    try {
      const user = await User.find();
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  //[GET] /user/:id get-info-an-user
  getInfoUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  //[PUT] /user/update/:id update info user
  updateInfoUser: async (req, res) => {
    try {
      const info = await User.findById(req.params.id);
      await info.updateOne({ $set: req.body });
      return res.status(200).json(info);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  //[DELETE] /user/:id delete-user
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      return res.status(200).json("Delete succesfully!");
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = userController;
