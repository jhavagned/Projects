// routes/orderRoutes.js
// Routes related to orders

//TASK: setup for managing orders (GET, POST).
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// GET all orders (admin route)
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('products.product');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new order
router.post('/', async (req, res) => {
  const { products, user, totalPrice } = req.body;

  const newOrder = new Order({
    products,
    user,
    totalPrice
  });

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;


