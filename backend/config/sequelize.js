const Sequelize = require("sequelize");
const Config = require("../dbs");

require("dotenv").config();

const sequelize = new Sequelize(
  Config[process.env.DB_ENV]?.database,
  Config[process.env.DB_ENV]?.username,
  Config[process.env.DB_ENV]?.password,
  {
    host: Config[process.env.DB_ENV]?.host,
    dialect: "postgres",
  }
);

module.exports = sequelize;
