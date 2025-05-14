const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// POST /categories
router.post('/', async (req, res) => {
  const category = new Category({ name: req.body.name });
  await category.save();
  res.status(201).json(category);
});

// GET /categories
router.get('/', async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

module.exports = router;
