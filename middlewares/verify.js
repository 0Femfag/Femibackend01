const jwt = require("jsonwebtoken");
const verify = (req, res, next) => {
  //   console.log(req);
  //   req.user = "Femi";
  //   console.log(req);
  //   const loggedIn = true;
  //   if (!loggedIn) {
  //     return res.json({ message: "You're not authenticated" });
  //   }
  //   next();
  const { user_token } = req.cookies;
  // console.log(user_token);
  if (!user_token) {
    return res.json({ message: "You're not logged In" });
  }
  jwt.verify(user_token, process.env.JWT_SECRET, (error, info) => {
    if (error) {
      return res.json({ message: error.message });
    }
    // console.log(info);
    req.user = info;
    next();
  });
};

module.exports = { verify };
