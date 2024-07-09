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
  subTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  details: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  curated: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  trending: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  treasuryFunded: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  runstoneRewards: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  investment: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  coin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fundedAmount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  walletId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  verified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  fundedWallets: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
});

module.exports = ProductModel;
