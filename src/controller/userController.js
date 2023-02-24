const { PrismaClient } = require("@prisma/client");
const model = new PrismaClient();
const getUser = async (req, res) => {
  let data = await model.user.findMany();
  // console.log(data);
  res.send(data);
};
const likeRes = async (req, res) => {
  console.log(model.like_res);
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
    res.sendStatus(500);
    // res.send(error.messsage);
  }
};
const unLikeRes = async (req, res) => {
  try {
    let { user_id } = req.params;
    // let { res_id } = req.body;
    // let data = {
    //   res_id,
    // };
    await model.like_res.delete({
      where: { user_id: Number(user_id) },
    });

    res.send(data);
  } catch (error) {
    console.log(error);
    // res.sendStatus(500);
    res.send(error);
  }
};
module.exports = { likeRes, getUser, unLikeRes };
