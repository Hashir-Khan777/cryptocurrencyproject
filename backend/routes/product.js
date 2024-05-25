const express = require("express");
const productModel = require("../models/product");

const ProductRouter = express.Router();

ProductRouter.get("/", async (req, res) => {
  try {
    const products = await productModel.findAll();
    res.status(200).send(products);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = ProductRouter;
