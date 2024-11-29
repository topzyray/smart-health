const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");
const { JWT_SECRET } = require("../config/env.js");

exports.protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (err) {
    res.status(401).json({ success: false, message: "Token verification failed" });
  }
};
