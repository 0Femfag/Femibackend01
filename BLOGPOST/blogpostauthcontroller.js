const userModel = require("./blogpostauthmodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
  const { password, role, ...others } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  const newUser = new userModel({
    password: hashedPassword,
    ...others,
  });
  try {
    await newUser.save();
    res.status(201).json({ message: "Account created successfully" }, newUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message, error: "registration failed" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userInfo = await userModel.findOne({ email });
    if (!userInfo) {
      return res.status(404).json({ message: "User doesn't exist" });
    }
    const verify = bcrypt.compareSync(password, userInfo.password);
    if (!verify) {
      return res.status(400).json({ message: "Password doesn't match" });
    }
    const userObject = user.toObject();
    delete userObject.password;

    const aboutUser = { id: userInfo.id, role: userInfo.role };
    const token = jwt.sign(aboutUser, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    res
      .cookie("user_token", token)
      .status(202)
      .json({ message: "user logged in succesfully" });
  } catch (error) {
    res.status(500).json({ message: error.message, error: "Login failed" });
  }
};

const OuathRegister = async (req, res) => {
  const { username, email, gender, phoneNumber } = req.body;
  try {
    const findUser = await userModel.findOne({ email });
    if (findUser && findUser.credentialAccount) {
      return res.status(404).json({ message: "illegal parameters" });
    }
    if (findUser) {
      const aboutUser = { id: findUser.id, role: findUser.role };
      const token = jwt.sign(aboutUser, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });
      return res
        .cookie("user_token", token)
        .status(200)
        .json({ message: "Login successful" });
    }
    const newUser = new userModel({
      username,
      email,
      gender,
      phoneNumber,
      credentialAccount: false,
    });
    const savedUser = await newUser.save();
    const aboutUser = { id: savedUser.id, role: savedUser.role };
    const token = jwt.sign(aboutUser, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    return res
      .cookie("user_token", token)
      .status(201)
      .json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logoutUser = async (req, res) => {
  try {
    res
      .clearCookie("user_token")
      .status(201)
      .json({ message: "user logged out succesfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.user;

  try {
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    if (user.role !== "admin" && user.role !== "user") {
      return res.status(403).json({ msg: "Invalid role - Access denied" });
    }

    if (getPost.creatorId.toString() !== id && role !== "Admin") {
      return res
        .status(403)
        .json({ message: "You're not authorised to do this" });
    }

    //Get all blog posts by this user
    const userBlogs = await Blog.find({ author: tokenId });

    //For Each Blog Post
    for (const blog of userBlogs) {
      //Delete all comments associated with the blog post
      await Comment.deleteMany({ post: blog._id });

      //Delete the blog post
      await Blog.findByIdAndDelete(blog._id);
    }

    //Delete all comments made by this user on other blog posts
    const userComments = await Comment.find({ author: tokenId });

    //For each comment remove the reference from the associated blog post
    for (const comment of userComments) {
      await Blog.findByIdAndUpdate(comment.post, {
        $pull: { comments: comment._id },
      });
    }

    //Delete all comments by this user
    await Comment.deleteMany({ author: tokenId });

    //Finally delete the user
    await User.findByIdAndDelete(tokenId);

    res.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Failed to delete user" });
  }
};

module.exports = { signUp, OuathRegister, loginUser, logoutUser, deleteUser };
