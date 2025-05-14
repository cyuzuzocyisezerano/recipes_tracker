const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// POST /recipes
router.post('/', async (req, res) => {
  const recipe = new Recipe(req.body);
  await recipe.save();
  res.status(201).json(recipe);
});

// GET /recipes/:categoryId
router.get('/:categoryId', async (req, res) => {
  const recipes = await Recipe.find({ categoryId: req.params.categoryId });
  res.json(recipes);
});

module.exports = router;
