const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
// const generateToken = require("../JWT/jwtController");
//const { StreamDescription } = require('mongodb')

//Creating a new user
const Register = async (req, res) => {
  const { Email, Password, Username } = req.body;
  //   since you required & specify uniquenesss in email, password, & username to be true in the model, the conditional statemennts right below aren't needed
  if (!Email || !Password || !Username) {
    return res.status(400).json({ msg: "All input fields must be filled" });
  }
  try {
    const clientUserName = await userModel.findOne({ Username });
    if (clientUserName) {
      return res.status(409).json({ msg: "Username already exists" });
    }
    const clientMail = await userModel.findOne({ Email });
    if (clientMail) {
      return res.status(409).json({ msg: "Email address already exists" });
    }
    const salt = bcrypt.genSaltSync(10);
    const hasshedPassword = bcrypt.hashSync(Password, salt);
    const user = { ...req.body, Password: hasshedPassword };
    const createdUser = new userModel(user);
    const newUser = await createdUser.save();

    // to select and remove user password from res.json
    const { Password: _, ...userData } = newUser.toObject();

    res.status(200).json({ msg: "User registered successfully: ", userData });
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};

//Login a registered user and return the user details
const Login = async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const User = await userModel.findOne({ Email });
    if (!User) {
      return res
        .status(400)
        .json({ msg: "Password or Email address incorrect." });
    }
    const comparison = bcrypt.compare(Password, User.Password);
    if (!comparison) {
      return res
        .status(400)
        .json({ msg: "Password or Email address incorrect." });
    }

    const { Password: _, ...userData } = User.toObject();

    // generating token for the user thats logged in
    const token = generateToken(User._id);
    res.cookie("Token", token, {
      httpOnly: true,
      secure: process.env.NODE_Env === "Postings",
      sameSite: "strict",
      maxAge: 400000000,
    });

    res.status(200).json({ msg: "User logged in successfully", userData });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { Register, Login };
