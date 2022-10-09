const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const middlewareController = require("../controllers/middlewareController");

//get all user
router.get("/", middlewareController.verifyToken, userController.getAllUsers);
//get info an user
router.get(
  "/:id",
  middlewareController.verifyToken,
  userController.getInfoUser
);
//update info user
router.put(
  "/update/:id",
  middlewareController.verifyToken,
  userController.updateInfoUser
);
//delete user
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  userController.deleteUser
);

module.exports = router;
