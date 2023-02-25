const express = require("express");
const {
  likeRes,
  unLikeRes,
  userLiked,
  specificLiked,
  userRate,
  addOrder,
} = require("../controller/userController");
const userRoute = express.Router();

userRoute.post("/likeRes", likeRes);
userRoute.delete("/unLikeRes/:user_id", unLikeRes);
userRoute.get("/userLiked/:user_id", userLiked);
userRoute.get("/userRate/:user_id", userRate);
userRoute.post("/addOrder", addOrder);

module.exports = userRoute;
