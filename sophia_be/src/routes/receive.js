const express = require("express");
const router = express.Router();

const receiveController = require("../controllers/receiveController");

//add new receive
router.post("/add-receive", receiveController.addReceive);
//get a receive by id
router.get("/:id", receiveController.getReceiveById);
//get all receives
router.get("/", receiveController.getReceive);

module.exports = router;
