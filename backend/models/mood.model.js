const mongoose = require("mongoose");

const moodSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    sentiment: { type: String, enum: ["positive", "negative", "neutral"], required: true },
    notes: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Mood", moodSchema);
