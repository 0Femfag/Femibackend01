const commentModel = require("../models/blogpostcomment");
const postModel = require("../models/blogpostcontent");

const makeComment = async (req, res) => {
  const { comment, postId } = req.body;
  const { id, role } = req.user;
  try {
    if (role !== "Admin" && role !== "User") {
      return res
        .status(403)
        .json({ message: "You're not authorised to do this" });
    }
    const getPost = await postModel.findById(postId);
    if (!getPost) {
      return res.status(404).json({ message: "No such post" });
    }
    const newestComment = new commentModel({
      comment,
      commentorsId: id,
      postId,
    });
    const savedComment = await newestComment.save();
    await postModel.findByIdAndUpdate(postId, {
      $push: { comments: savedComment.id },
    });
    res.status(201).json({ message: "Your comment added" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getallComment = async (req, res) => {
  try {
    const getAll = await commentModel
      .find()
      .populate({ path: "postId", select: "title desc content" })
      .populate({ path: "commentorsId", select: "username gender email" });
    if (!getAll) {
      return res.status(404).json({ message: "No comments on this post yet" });
    }
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getComment = async (req, res) => {
  const { commentId } = req.params;
  try {
    const oneComment = await commentModel
      .findById(commentId)
      .populate({ path: "postId", select: "title desc content" })
      .populate({ path: "commentorsId", select: "username gender email" });
    res.status(200).json(oneComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteoneComment = async (req, res) => {
  const { id } = req.params;
  const { role } = req.user;
  console.log(id);
  try {
    if (role !== "Admin" && role !== "User") {
      return res
        .status(403)
        .json({ message: "You're not authorised to do this" });
    }
    const getComment = await commentModel.findById(id);
    if (!getComment) {
      return res.status(404).json({ message: "No such comment" });
    }
    const deleteOne = await commentModel.findByIdAndDelete(id);
    res.status(200).json({ message: "comment was deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatoneComment = async (req, res) => {
  const { id, ...others } = req.body;
  const { role } = req.user;
  try {
    if (role !== "Admin" && role !== "User") {
      return res
        .status(403)
        .json({ message: "You're not authorised to do this" });
    }
    const getoneCommment = await commentModel.findById(id);
    if (!getoneCommment) {
      return res.status(404).json({ message: "No such comment" });
    }
    const updateOne = await commentModel.findByIdAndUpdate(
      id,
      { ...others },
      { new: true },
    );
    res.status(200).json({ message: "updated successfully", updateOne });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  makeComment,
  getallComment,
  getComment,
  deleteoneComment,
  updatoneComment,
};
