// models/Product.js
// Mongoose schema for products


//TASK: Define the product schema
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String },  // You can add more fields like stock, ratings, etc.
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', productSchema);
