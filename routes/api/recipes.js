const express = require("express");

const router = express.Router();
const Recipes = require("../../models/Recipes");

const mongoose = require("mongoose");
const uuid = require("uuid");

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.find();
    res.json(recipes);
  } catch (err) {
    res.json({ message: err });
  }
});


module.exports = router;