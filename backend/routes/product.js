const express = require("express");
const productModel = require("../models/product");
const categoryModel = require("../models/category");
const multerService = require("../services/multer.service");
const cloudinaryService = require("../services/cloudinary.service");
const { Op } = require("sequelize");

const ProductRouter = express.Router();

ProductRouter.get("/", async (req, res) => {
  try {
    const products = await productModel.findAll({
      include: ["category"],
    });
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send(err);
  }
});

ProductRouter.get("/:id", async (req, res) => {
  try {
    const product = await productModel.findOne({
      where: { id: req.params.id },
    });
    const category = await categoryModel.findOne({
      where: { id: product.CategoryId },
    });
    res.status(200).send({ ...product.dataValues, category });
  } catch (err) {
    res.status(500).send(err);
  }
});

ProductRouter.get("/wallet/:walletId", async (req, res) => {
  try {
    const product = await productModel.findAll({
      where: { walletId: req.params.walletId },
    });
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

ProductRouter.get("/funded/:walletId", async (req, res) => {
  try {
    const products = await productModel.findAll({
      where: {
        fundedWallets: {
          [Op.contains]: [req.params.walletId],
        },
      },
    });
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send(err);
  }
});

ProductRouter.post("/", async (req, res) => {
  try {
    const product = await productModel.create(req.body);
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

ProductRouter.put("/:id/:walletId", async (req, res) => {
  try {
    const product = await productModel.findOne({
      where: { id: req.params.id },
    });
    product.increment("fundedAmount", { by: req.body.fundedAmount });
    const fundedWallets = product.fundedWallets || [];
    if (!fundedWallets.includes(req.params.walletId)) {
      fundedWallets.push(req.params.walletId);
    }
    product.fundedWallets = fundedWallets;
    await product.save();
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

ProductRouter.post(
  "/image",
  multerService.single("image"),
  async (req, res) => {
    try {
      const { path } = req.file;
      const image = await cloudinaryService.uploadImage(
        path,
        "products",
        1000,
        1000
      );
      res.status(200).send({ image });
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

module.exports = ProductRouter;
