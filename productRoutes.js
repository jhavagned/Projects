// routes/productRoutes.js
// Routes related to products

//TASK: Create routes to manage products (GET, POST).
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new product (admin route)
router.post('/', async (req, res) => {
  const { name, description, price, category, image } = req.body;
  
  const newProduct = new Product({
    name, description, price, category, image
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
