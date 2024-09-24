const newuserModel = require("../models/newuser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { password, role, ...others } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  console.log(hashedPassword);
  const newUser = await newuserModel({
    password: hashedPassword,
    ...others,
    role: "Basic",
  });
  try {
    const savedUser = await newUser.save();
    res.json({ message: "Account created successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userInfo = await newuserModel.findOne({ email });
    if (!userInfo) {
      return res.json({ message: "User doesn't exist" });
    }
    const verify = bcrypt.compareSync(password, userInfo.password);
    console.log(verify);
    if (!verify) {
      return res.json({ message: "Password doesn't match" });
    }
    const aboutUser = { id: userInfo.id, role: userInfo.role };
    const token = jwt.sign(aboutUser, process.env.JWT_SECRET);
    console.log(token);
    res.cookie("user_token", token);
    res.json({ message: "user logged in succesfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
};

const logoutUser = async (req, res) => {
  try {
    res
      .clearCookie("user_token")
      .status(200)
      .json({ message: "user logged out succesfully" });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};

const OuathRegister = async (req, res) => {
  const { username, email, gender } = req.body;
  try {
    const findOne = await newuserModel.findOne({ email });
    if (findOne && findOne.credentialAccount) {
      return res.status(404).json({ message: "illegal parameters" });
    }
    if (findOne) {
      const aboutUser = { id: findOne.id, role: findOne.role };
      const token = jwt.sign(aboutUser, process.env.JWT_SECRET);
      return res
        .cookie("user_token", token)
        .status(200)
        .json({ message: "Login successful" });
    }
    const newUser = new newuserModel({
      username,
      email,
      gender,
      credentialAccount: false,
    });
    const savedUser = await newUser.save();
    const aboutUser = { id: findOne.id, role: findOne.role };
    const token = jwt.sign(aboutUser, process.env.JWT_SECRET);
    return res
      .cookie("user_token", token)
      .status(200)
      .json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = { register, loginUser, logoutUser, OuathRegister };
