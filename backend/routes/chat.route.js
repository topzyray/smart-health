const express = require("express");
const { analyzeSentiment } = require("../utils/openaiService.js");
const router = express.Router();

router.post("/analyze", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  try {
    const sentiment = await analyzeSentiment(message);
    res.status(200).json({ sentiment });
  } catch (error) {
    res.status(500).json({ error: "Failed to analyze sentiment." });
  }
});

module.exports = router;
