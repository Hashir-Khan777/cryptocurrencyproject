const express = require("express");
const categoryModel = require("../models/category");

const CategoryRouter = express.Router();

CategoryRouter.get("/", async (req, res) => {
  try {
    const categories = await categoryModel.findAll();
    res.status(200).send(categories);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = CategoryRouter;
