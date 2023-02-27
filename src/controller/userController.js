const { PrismaClient } = require("@prisma/client");
const model = new PrismaClient();

const likeRes = async (req, res) => {
  try {
    let { user_id, res_id } = req.body;
    let date_like = new Date();
    let data = {
      user_id,
      res_id,
      date_like,
    };
    await model.like_res.create({ data });

    res.send("Liked");
  } catch (error) {
    res.send("User already liked");
  }
};

const unLikeRes = async (req, res) => {
  try {
    let { user_id } = req.params;
    let { res_id } = req.body;

    await model.like_res.delete({
      where: { user_id_res_id: { user_id: Number(user_id), res_id } },
    });

    res.send("Unliked");
  } catch (error) {
    res.send("User already unliked");
  }
};
const unLikeResBody = async (req, res) => {
  try {
    // let { user_id } = req.params;
    let { user_id, res_id } = req.body;

    await model.like_res.delete({
      where: { user_id_res_id: { user_id, res_id } },
    });

    res.send("Unliked");
  } catch (error) {
    res.send("User already unliked");
  }
};
const userLiked = async (req, res) => {
  try {
    let { user_id } = req.params;
    let data = await model.like_res.findMany({
      where: {
        user_id: Number(user_id),
      },
      include: {
        restaurant: true,
        user: true,
      },
    });
    // console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
const userRate = async (req, res) => {
  try {
    let { user_id } = req.params;
    let data = await model.rate_res.findMany({
      where: {
        user_id: Number(user_id),
      },
      include: {
        user: true,
        restaurant: true,
      },
    });
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
};
const addOrder = async (req, res) => {
  try {
    let { user_id, food_id, amount, code, arr_sub_id } = req.body;
    let data = {
      user_id,
      food_id,
      amount,
      code,
      arr_sub_id,
    };
    await model.order.create({ data });

    res.send("Ordered");
  } catch (error) {
    res.send("User already ordered");
    // res.send(error.message);
  }
};

const userResRate = async (req, res) => {
  try {
    let { user_id, res_id } = req.body;

    let data = await model.rate_res.findMany({
      where: { user_id, res_id },
      include: {
        user: true,
        restaurant: true,
      },
    });

    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
};
const userResLike = async (req, res) => {
  try {
    let { user_id, res_id } = req.body;

    let data = await model.like_res.findMany({
      where: { user_id, res_id },
      include: {
        user: true,
        restaurant: true,
      },
    });

    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
};
module.exports = {
  likeRes,
  userLiked,
  unLikeRes,
  userRate,
  addOrder,
  userResRate,
  userResLike,
  unLikeResBody,
};
