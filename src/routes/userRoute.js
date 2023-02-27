const express = require("express");
const {
  likeRes,
  unLikeRes,
  userLiked,
  userRate,
  addOrder,
  userResRate,
  userResLike,
  unLikeResBody,
} = require("../controller/userController");
const userRoute = express.Router();

userRoute.post("/likeRes", likeRes);
userRoute.delete("/unLikeRes/:user_id", unLikeRes);
userRoute.delete("/unLikeResBody", unLikeResBody);
userRoute.get("/userLiked/:user_id", userLiked);
userRoute.get("/userRate/:user_id", userRate);
userRoute.post("/addOrder", addOrder);
userRoute.get("/userResRate", userResRate);
userRoute.get("/userResLike", userResLike);

module.exports = userRoute;
