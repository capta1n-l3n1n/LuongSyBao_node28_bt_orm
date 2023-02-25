const { PrismaClient } = require("@prisma/client");
const model = new PrismaClient();

const resLiked = async (req, res) => {
  let { res_id } = req.params;

  try {
    let data = await model.like_res.findMany({
      where: {
        res_id: Number(res_id),
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
const addRate = async (req, res) => {
  try {
    let { res_id, user_id, amount } = req.body;
    let date_rate = new Date();
    let data = { res_id, user_id, amount, date_rate };
    await model.rate_res.create({ data });
    res.send(data);
  } catch (error) {
    res.send("User already rated this restaurant");
  }
};
const resRate = async (req, res) => {
  let { res_id } = req.params;

  try {
    let data = await model.rate_res.findMany({
      where: {
        res_id: Number(res_id),
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
module.exports = { resLiked, addRate, resRate };
