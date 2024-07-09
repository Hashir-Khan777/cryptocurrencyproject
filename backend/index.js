const cors = require("cors");
const express = require("express");
const AppRouter = require("./routes");
const sequelize = require("./config/sequelize");
const CategoryModel = require("./models/category");
const ProductModel = require("./models/product");
const UpdateModel = require("./models/update");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", AppRouter);

ProductModel.hasMany(UpdateModel, { as: "updates", onDelete: "CASCADE" });
UpdateModel.hasOne(ProductModel, {
  as: "product",
  forienKey: "productId",
  onDelete: "CASCADE",
});
CategoryModel.hasMany(ProductModel, { as: "products", onDelete: "CASCADE" });
ProductModel.hasOne(CategoryModel, {
  as: "category",
  forienKey: "categoryId",
  onDelete: "CASCADE",
});

sequelize.sync();

app.listen(PORT);
