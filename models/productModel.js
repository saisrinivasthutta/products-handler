const db = require("../db");

const Product = {
  addProducts: (products, callback) => {
    const placeholders = products.map(() => "(?, ?, ?)").join(",");
    const flatValues = products.reduce(
      (acc, { name, price, quantity }) => [...acc, name, price, quantity],
      []
    );
    const query = `INSERT INTO products (name, price, quantity) VALUES ${placeholders}`;
    db.run(query, flatValues, callback);
  },

  calculateTotalValue: (callback) => {
    const query = `SELECT SUM(price * quantity) AS totalValue FROM products`;
    db.get(query, (err, row) => {
      if (err) callback(err);
      else callback(null, row.totalValue || 0);
    });
  },
};

module.exports = Product;
