const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const productController = require("../controllers/productController");

//multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/productimgs");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//add a product
router.post("/add", upload.single("image"), productController.addProduct);
//search products
router.get("/search", productController.searchProduct);
//get all products
router.get("/all-products", productController.getAllProduct);
//get a product
router.get("/:id", productController.getProductById);
//get products by category
router.get("/", productController.findProductByCategory);

module.exports = router;
