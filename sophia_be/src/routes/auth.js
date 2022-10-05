const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const middlewareController = require("../controllers/middlewareController");

//Register
router.post("/register", authController.registerUser);
//login
router.post("/login", authController.loginUser);
//refresh
router.post("/refresh", authController.requestRefreshToken);
//logout
router.post("/logout", middlewareController.verifyToken, authController.logOut);

module.exports = router;
