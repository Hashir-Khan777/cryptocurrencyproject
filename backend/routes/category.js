const express = require("express");
const categoryModel = require("../models/category");
const productModel = require("../models/product");

const CategoryRouter = express.Router();

CategoryRouter.get("/", async (req, res) => {
  try {
    const categories = await categoryModel.findAll({
      include: ["products"],
    });
    res.status(200).send(categories);
  } catch (err) {
    res.status(500).send(err);
  }
});

CategoryRouter.post("/", async (req, res) => {
  try {
    const category = await categoryModel.create(req.body);
    res.status(200).send(category);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = CategoryRouter;
