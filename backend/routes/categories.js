const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

// Creating Categories
router.post("/categories", async (req, res) => {
  try {
    const payload = req.body;

    const category = await new Category(payload);
    const saveCat = await category.save();

    res.status(201).send(saveCat);
  } catch (error) {
    res.status(500).send({ "THE ERROR": error });
  }
});

module.exports = router;
