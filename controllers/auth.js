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

module.exports = { register, loginUser };
