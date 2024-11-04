const postModel = require("../models/blogpost");

const makePost = async (req, res) => {
  const { creatorId, ...others } = req.body;
  const { id } = req.user;
  const newPost = new postModel({ ...others, creatorId: id });
  try {
    await newPost.save();
    res.status(201).json({ message: "Your post was sent" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getallPost = async (req, res) => {
  try {
    const allPost = await postModel
      .find()
      .populate({ path: "creatorId", select: "username email gender" })
      .populate({ path: "comments", select: "comment commentorsId" });
    if (!allPost) {
      return res.status(404).json({ message: "No such post" });
    }
    res.status(200).json(allPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getonePost = async (req, res) => {
  const { postId } = req.params;
  try {
    const onePost = await postModel
      .findById(postId)
      .populate({ path: "creatorId", select: "username email gender" })
      .populate({ path: "comments", select: "comment commentorsId" });
    if (!onePost) {
      return res.status(404).json({ message: "No such post" });
    }
    res.status(200).json(onePost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  const { postId, ...others } = req.body;
  const { id } = req.user;
  try {
    const getPost = await postModel.findById(postId);
    if (!getPost) {
      return res.status(400).json({ message: "No such post" });
    }
    if (getPost.creatorId.toString() !== id) {
      return res
        .status(403)
        .json({ message: "You're not authorised to do this" });
    }
    const updatePost = await postModel
      .findByIdAndUpdate(postId, { ...others }, { new: true })
      .populate({ path: "creatorId", select: "username email gender" });
    res.status(200).json({ message: "Post updated successfully", updatePost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  const { postId } = req.params;
  const { id, role } = req.user;
  try {
    const getPost = await postModel.findById(postId);
    if (!getPost) {
      return res.status(404).json({ message: "No such post" });
    }
    if (getPost.creatorId.toString() !== id && role !== "Admin") {
      return res
        .status(403)
        .json({ message: "You're not authorised to do this" });
    }
    const deletePost = await postModel.findByIdAndDelete(postId);
    res.status(200).json({ message: "This post was deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { makePost, getallPost, getonePost, updatePost, deletePost };
