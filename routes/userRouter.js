const express = require("express");
const router = express.Router();
const { Register, Login } = require("../controllers/userController");

//const authMiddleware = require('../Middlewares/authMiddleware')

// const userRouter = Router()
//register a user to database
router.post("/user/register", Register);

//user login
router.post("/user/login", Login);

//update a user
// router.put("/user/:id", /*authMiddleware,*/ Update_User);

//delete user
// router.delete("/user/:id", /*authMiddleware,*/ Delete_User);

module.exports = router;
