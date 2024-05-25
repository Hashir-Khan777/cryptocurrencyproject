const express = require("express");
const ProductRouter = require("./product");
const CategoryRouter = require("./category");

const AppRouter = express.Router();

AppRouter.use("/products", ProductRouter);
AppRouter.use("/categories", CategoryRouter);

module.exports = AppRouter;
