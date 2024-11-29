const Mood = require("../models/mood.model.js");

exports.addMood = async (req, res) => {
  const { mood, sentimentScore } = req.body;

  try {
    const newMood = await Mood.create({
      user: req.user._id,
      mood,
      sentimentScore,
    });
    res.status(201).json({ success: true, newMood });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.getMoods = async (req, res) => {
  try {
    const moods = await Mood.find({ user: req.user._id });
    res.status(200).json({ success: true, moods });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
