const cors = require("cors");
const express = require("express");
const AppRouter = require("./routes");
const sequelize = require("./config/sequelize");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", AppRouter);

sequelize.sync();

app.listen(PORT);
