const newuserModel = require("../models/newuser");
const jwt = require("jsonwebtoken");

const updateUser = async (req, res) => {
  // console.log(req.user);
  const { password, ...others } = req.body;
  // const { user_token } = req.cookies;
  // const userInfo = jwt.verify(
  //   user_token,
  //   process.env.JWT_SECRET,
  //   (err, userInfo) => {
  //     if (err) {
  //       console.log(err.message);
  //       res.json({ message: err.message });
  //     } else {
  //       console.log(userInfo);
  //       // res.json(userInfo);
  //     }
  //   }
  // );
  // console.log(userInfo);
  // const { id } = jwt.verify(user_token, process.env.JWT_SECRET);
  //   (err, onlyId) => {
  //     if (err) {
  //       console.log(err.message);
  //       res.json({ message: err.message });
  //     } else {
  //       // console.log(id);
  //       // res.json(id);
  //     }
  //   }
  // );
  const { id } = req.user;
  console.log(id);

  try {
    const updateoneUser = await newuserModel.findByIdAndUpdate(id, others, {
      new: true,
    });
    res.json(updateoneUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const newPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const { id } = req.user;
  try {
    const getUser = await newuserModel.findById(id);
    if (oldPassword !== getUser.password) {
      return res.json({ message: "Password doesn't match" });
    }
    await newuserModel.findByIdAndUpdate(
      id,
      { password: newPassword },
      { new: true }
    );
    if (newPassword === getUser.password) {
      return res.json({ message: "Same as old password" });
    }
    res.json({ message: "password updated successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.user;
  console.log(id);
  try {
    await newuserModel.findByIdAndDelete(id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

const updateRole = async (req, res) => {
  const { id } = req.body;
  const { role } = req.user;
  console.log(role);
  if (role !== "SuperAdmin" && role !== "Admin") {
    return res.json({ message: "You don't have the permission" });
  }
  try {
    await newuserModel.findByIdAndUpdate(id, { role: "Admin" }, { new: true });
    res.json({ message: "User is now an Admin" });
  } catch (error) {
    res.json(error.message);
  }
  // console.log(req.user);
  // res.json({ message: "Hello" });
};
module.exports = { updateUser, newPassword, deleteUser, updateRole };
