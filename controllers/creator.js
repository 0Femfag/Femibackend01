const myModel = require("../models/creator");

const createPost = async (req, res) => {
  const body = req.body;
  const newPost = new myModel(body);
  try {
    const post = await newPost.save();
    res.json(post);
  } catch (error) {
    console.log(error.message);
  }
};

const likePost = async (req, res) => {
  const { id, userId } = req.body;
  try {
    const findPost = await myModel.findById(id);
    const checkuserinArray = findPost.likes.includes(userId);
    console.log(checkuserinArray);
    if (!checkuserinArray) {
      findPost.likes.push(userId);
    } else {
      const index = findPost.likes.indexOf(userId);
      findPost.likes.splice(index, 1);
    }
    await myModel.findByIdAndUpdate(
      id,
      { likes: findPost.likes },
      { new: true }
    );
    console.log(findPost);
    res.json({ message: "Like added" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
module.exports = { createPost, likePost };
