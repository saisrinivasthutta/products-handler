const express = require("express");
const {
  addProducts,
  getTotalValue,
} = require("../controllers/productController");

const router = express.Router();

router.post("/products", addProducts);
router.get("/products/total-value", getTotalValue);

module.exports = router;
