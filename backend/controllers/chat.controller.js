const Chat = require("../models/chat.model.js");
const { generateAIResponse, generateSentimentAnalysis } = require("../utils/openaiService.js");

exports.sendMessage = async (req, res, next) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ success: false, message: "Message is required" });
  }

  try {
    const [aiResponse, sentiment] = await Promise.all([
      generateAIResponse(message),
      generateSentimentAnalysis(message),
    ]);

    const chat = await Chat.create({
      user: req.user._id,
      message,
      response: aiResponse,
      sentiment,
    });

    res.status(201).json({ success: true, chat });
  } catch (err) {
    next(err);
  }
};