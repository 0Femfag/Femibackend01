const postModel = require("../models/post");
const makePost = async (req, res) => {
  const { creatorId, ...others } = req.body;
  const { id } = req.user;
  const newPost = new postModel({ ...others, creatorId: id });
  try {
    await newPost.save();
    res.json({ message: "Post created successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
};

const getallPost = async (req, res) => {
  // console.log(req.user);
  try {
    const allPost = await postModel
      .find()
      .populate({ path: "creatorId", select: "username email gender" })
      .populate({ path: "comments", select: "comment commentorsId" });
    res.json(allPost);
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
};

const getonePost = async (req, res) => {
  console.log(req.user);
  const { id } = req.params;
  console.log(id);
  try {
    const getOne = await postModel.findById(id);
    res.json(getOne);
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
};

module.exports = { makePost, getallPost, getonePost };
