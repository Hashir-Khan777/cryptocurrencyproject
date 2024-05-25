const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const CategoryModel = sequelize.define("Category", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = CategoryModel;
