const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const middlewareController = require("../controllers/middlewareController");

//get all user
router.get("/", middlewareController.verifyToken, userController.getAllUsers);
//delete user
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  userController.deleteUser
);

module.exports = router;
