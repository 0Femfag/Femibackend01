const postModel = require("../models/blogpostcontent");
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
    res.status(200).json(allPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getonePost = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const onePost = await postModel
      .findById(id)
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
  const { id, ...others } = req.body;
  const { role } = req.user;
  try {
    if (role !== "Admin" && role !== "User") {
      return res
        .status(403)
        .json({ message: "You're not authorised to do this" });
    }
    const getPost = await postModel.findById(id);
    if (!getPost) {
      return res.status(400).json({ message: "No such post" });
    }
    const updatePost = await postModel.findByIdAndUpdate(
      id,
      { ...others },
      { new: true },
    );
    res.status(200).json({ message: "Post updated successfully", updatePost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { role } = req.user;
  try {
    if (role !== "Admin" && role !== "User") {
      return res
        .status(403)
        .json({ message: "You're not authorised to do this" });
    }
    const getPost = await postModel.findById(id);
    if (!getPost) {
      return res.status(404).json({ message: "No such post" });
    }
    const deletePost = await postModel.findByIdAndDelete(id);
    res.status(200).json({ message: "This post was deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { makePost, getallPost, getonePost, updatePost, deletePost };
