const userModel = require("../models/blogpostauth");
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
    res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    const aboutUser = { id: userInfo.id, role: userInfo.role };
    const token = jwt.sign(aboutUser, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    res
      .cookie("user_token", token)
      .status(202)
      .json({ message: "user logged in succesfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
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

module.exports = { signUp, OuathRegister, loginUser, logoutUser };
