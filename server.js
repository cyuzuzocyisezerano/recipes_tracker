const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const categoryRoutes = require('./routes/categories');
const recipeRoutes = require('./routes/recipes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://samuel:1234@cluster0.ywz0ocw.mongodb.net/recipeApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"));

app.use('/categories', categoryRoutes);
app.use('/recipes', recipeRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
