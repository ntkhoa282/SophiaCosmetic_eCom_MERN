const express = require("express");
const router = express.Router();

const receiveController = require("../controllers/receiveController");

//add new receive
router.post("/add-receive", receiveController.addReceive);
//get all receives
router.get("/", receiveController.getReceive);

module.exports = router;
