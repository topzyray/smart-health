const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    message: { type: String, required: true },
    response: { type: String, required: true },
    sentiment: { type: String, enum: ["positive", "negative", "neutral"], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", chatSchema);
