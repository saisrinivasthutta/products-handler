const Product = require("../models/productModel");

const addProducts = (req, res) => {
  const { products } = req.body;

  if (!Array.isArray(products) || products.length === 0) {
    return res
      .status(400)
      .json({ error: "Invalid input: products list required" });
  }

  Product.addProducts(products, (err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to add products" });
    }
    res.status(201).json({ message: "Products added successfully" });
  });
};

const getTotalValue = (req, res) => {
  Product.calculateTotalValue((err, totalValue) => {
    if (err) {
      return res.status(500).json({ error: "Failed to calculate total value" });
    }
    res.status(200).json({ totalValue });
  });
};

module.exports = {
  addProducts,
  getTotalValue,
};
