const User = require("../models/user.model.js");
const { generateToken } = require("../utils/jwt.js");
const logger = require("../utils/logger.js");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    const token = generateToken(user._id);
    res.status(201).json({ success: true, user, token });
  } catch (err) {
    logger.error("An error occurred: " + err.message)
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
    const token = generateToken(user._id);
    res.status(200).json({ success: true, user, token });
  } catch (err) {
    logger.error("An error occurred: " + err.message)
    res.status(500).json({ success: false, message: "Server error" });
  }
};
