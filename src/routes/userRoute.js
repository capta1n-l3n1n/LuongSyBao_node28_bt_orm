const express = require("express");
const { likeRes, getUser, unLikeRes } = require("../controller/userController");
const userRoute = express.Router();

userRoute.post("/likeRes", likeRes);
userRoute.get("/getUser", getUser);
userRoute.delete("/unLikeRes/:user_id", unLikeRes);
module.exports = userRoute;
