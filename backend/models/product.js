const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const ProductModel = sequelize.define("Product", {
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  curated: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    default: false,
  },
  trending: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    default: false,
  },
  treasuryFunded: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    default: false,
  },
  rewards: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    default: false,
  },
  subTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subContent: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  barRate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  barTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  barPercent: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = ProductModel;
