const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.model.js");
const config = require("../config/env.js");

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists." });

    const hashedPassword = bcrypt.hashSync(password, 10);
    await User.create({ firstName, lastName, email, password: hashedPassword });
    res.status(201).json({ message: "User created successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const validUser = await User.findOne({ email });
    if (!validUser)
      return res.status(400).json({ message: "Invalid email or password." });
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword)
      return res.status(400).json({ message: "Invalid email or password." });

    const token = jwt.sign({ id: validUser._id }, config.JWT_SECRET, {
      expiresIn: "1h",
    });
    const { password: hashedPassword, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: false })
      .status(200)
      .json({
        success: true,
        data: {
          validUser: rest,
        },
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};
