const User = require("../models/user.model");

const jwt = require("jsonwebtoken");
const isAuththenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(404).json({
      success: true,
      message: "Login First",
    });
  }
  const decoded = jwt.verify(token, process.env.TOKEN_KEY);

  req.user = await User.findById(decoded._id);
  next();
};
module.exports = isAuththenticated;
