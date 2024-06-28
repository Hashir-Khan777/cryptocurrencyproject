const Sequelize = require("sequelize");
const Config = require("../dbs");

require("dotenv").config();

const sequelize = new Sequelize(
  "defaultdb",
  "avnadmin",
  "AVNS_B8fk_9sK0YA7oE2r1U2",
  {
    host: "pg-f0e7207-hashirk966-d8b9.f.aivencloud.com",
    dialect: "postgres",
  }
);

module.exports = sequelize;
