const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const updateModel = sequelize.define("Update", {
  update: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = updateModel;
