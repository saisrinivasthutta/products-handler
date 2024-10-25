const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use(productRoutes);

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
