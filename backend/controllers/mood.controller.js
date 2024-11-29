const Mood = require("../models/mood.model.js");

exports.logMood = async (req, res, next) => {
  const { sentiment, notes } = req.body;

  if (!sentiment) {
    return res.status(400).json({ success: false, message: "Sentiment is required" });
  }

  try {
    const mood = await Mood.create({
      user: req.user._id,
      sentiment,
      notes,
    });

    res.status(201).json({ success: true, mood });
  } catch (err) {
    next(err);
  }
};

exports.getMoodLogs = async (req, res, next) => {
  try {
    const moods = await Mood.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, moods });
  } catch (err) {
    next(err);
  }
};