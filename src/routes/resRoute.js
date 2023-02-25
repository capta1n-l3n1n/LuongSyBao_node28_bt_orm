const express = require("express");
const { resLiked, resRate, addRate } = require("../controller/resController");
const resRoute = express.Router();

resRoute.get("/resLiked/:res_id", resLiked);
resRoute.post("/addRate", addRate);
resRoute.get("/resRate/:res_id", resRate);
module.exports = resRoute;
