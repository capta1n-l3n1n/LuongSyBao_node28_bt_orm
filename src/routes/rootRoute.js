const express = require("express");
const resRoute = require("./resRoute");
const userRoute = require("./userRoute");

const rootRoute = express.Router();
rootRoute.use("/user", userRoute);
rootRoute.use("/res", resRoute);
module.exports = rootRoute;
