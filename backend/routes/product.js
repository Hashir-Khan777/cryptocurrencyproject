const express = require("express");
const productModel = require("../models/product");
const categoryModel = require("../models/category");
const multerService = require("../services/multer.service");
const cloudinaryService = require("../services/cloudinary.service");
const { Op } = require("sequelize");
const updateModel = require("../models/update");

const ProductRouter = express.Router();

ProductRouter.get("/", async (req, res) => {
  try {
    const products = await productModel.findAll({
      where: { verified: true },
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
      where: { id: req.params.id, verified: true },
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
      where: { walletId: req.params.walletId, verified: true },
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
        verified: true,
        fundedWallets: {
          [Op.contains]: [{ wallet: req.params.walletId }],
        },
      },
    });
    res.status(200).send(products);
  } catch (err) {
    console.log(err);
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
    const fundedWallets = product.fundedWallets;
    if (!fundedWallets.find((x) => x.wallet === req.params.walletId)) {
      fundedWallets.push({
        wallet: req.params.walletId,
        amount: req.body.fundedAmount,
      });
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

ProductRouter.post("/update", async (req, res) => {
  try {
    const update = await updateModel.create(req.body);
    res.status(200).send(update);
  } catch (err) {
    res.status(500).send(err);
  }
});

ProductRouter.get("/updates/:id", async (req, res) => {
  try {
    const updates = await updateModel.findAll({
      where: { ProductId: req.params.id },
    });
    res.status(200).send(updates);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = ProductRouter;
