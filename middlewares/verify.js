const jwt = require("jsonwebtoken");
const verify = (req, res, next) => {
  const { user_token } = req.cookies;
  if (!user_token) {
    return res.status(401).json({ message: "You're not logged In" });
  }
  jwt.verify(user_token, process.env.JWT_SECRET, (error, info) => {
    if (error) {
      return res.status(401).json({ message: "Invalid token", error });
    }
    req.user = info;
    next();
  });
};

module.exports = { verify };
