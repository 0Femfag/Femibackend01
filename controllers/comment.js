const commentModel = require("../models/comment");
const postModel = require("../models/post");

const makeComment = async (req, res) => {
  const { comment, postId } = req.body;
  const { id } = req.user;
  try {
    const newestComment = new commentModel({
      comment,
      commentorsId: id,
      postId,
    });
    const savedComment = await newestComment.save();
    await postModel.findByIdAndUpdate(postId, {
      $push: { comments: savedComment.id },
    });
    res.json({ message: "Comment made successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
};

const getallComment = async (req, res) => {
  try {
    const getAll = await commentModel.find();
    res.json(getAll);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// const getoneComment = async (req, res) => {
//   const { postId } = req.params;
//   console.log(postId);
//   try {
//     const getone = await commentModel.find({ postId: req.params.postId });
//     res.json(getone);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// };

const getComment = async (req, res) => {
  const { commentId } = req.params;
  try {
    const oneComment = await commentModel.findById(commentId);
    res.json(oneComment);
    console.log(oneComment);
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
};

const deleteoneComment = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const getComment = await commentModel.findById(id);
    if (!getComment) {
      return res.json({ message: "No such comment" });
    }
    const deleteOne = await commentModel.findByIdAndDelete(id);
    res.json({ message: "delete successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updatoneComment = async (req, res) => {
  const { id, ...others } = req.body;
  try {
    const getPost = await commentModel.findById(id);
    if (!getPost) {
      return res.json({ message: "No such comment" });
    }
    const updateOne = await commentModel.findByIdAndUpdate(
      id,
      { ...others },
      { new: true }
    );
    res.json({ message: "updated successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  makeComment,
  getallComment,
  getComment,
  // getoneComment,
  deleteoneComment,
  updatoneComment,
};
