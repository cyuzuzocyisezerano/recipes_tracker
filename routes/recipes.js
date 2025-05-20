const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// POST /recipes - Create a new recipe
router.post('/', async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /recipes/:categoryId - Get recipes by category ID
router.get('/:categoryId', async (req, res) => {
  try {
    const recipes = await Recipe.find({ categoryId: req.params.categoryId });
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /recipes/:id - Update a recipe by recipe ID
router.put('/:id', async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.json(updatedRecipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE /recipes/:id - Delete a recipe by recipe ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);

    if (!deletedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.json({ message: 'Recipe deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
