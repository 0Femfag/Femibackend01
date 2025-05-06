const commentModel = require("./blogpostcommentmodel");
const postModel = require("./blogpostmodel");

const makeComment = async (req, res) => {
  const { comment, postId } = req.body;
  const { id, role } = req.user;
  try {
    const getPost = await postModel.findById(postId);
    if (!getPost) {
      return res.status(404).json({ message: "No such post" });
    }
    if (role !== "Admin" && role !== "User") {
      return res
        .status(403)
        .json({ message: "You're not authorised to do this" });
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
  const { postId } = req.params;
  try {
    const getAll = await commentModel
      .find({ postId })
      .populate({ path: "postId", select: "title description content" })
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
      .populate({ path: "postId", select: "title description content" })
      .populate({ path: "commentorsId", select: "username gender email" });
    res.status(200).json(oneComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteoneComment = async (req, res) => {
  const { commentId, postId } = req.body;
  const { id, role } = req.user;
  try {
    const getComment = await commentModel.findById(commentId);
    if (!getComment) {
      return res.status(404).json({ message: "No such comment" });
    }
    if (getComment.commentorsId.toString() !== id && role !== "Admin") {
      return res
        .status(403)
        .json({ message: "You're not authorised to do this" });
    }
    const deleteComment = await commentModel.findByIdAndDelete(commentId);
    await postModel.findByIdAndUpdate(postId, {
      $pull: { comments: deleteComment.id },
    });
    res.status(200).json({ message: "comment was deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateoneComment = async (req, res) => {
  const { commentId, postId, ...others } = req.body;
  const { id } = req.user;
  try {
    const getoneComment = await commentModel.findById(commentId);
    if (!getoneComment) {
      return res.status(404).json({ message: "No such comment" });
    }
    if (getoneComment.commentorsId.toString() !== id) {
      return res
        .status(403)
        .json({ message: "You're not authorised to do this" });
    }
    const updateOne = await commentModel.findByIdAndUpdate(
      commentId,
      postId,
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
  updateoneComment,
};
