const { OpenAI } = require("openai");
const config = require("../config/env.js")
const logger = require("./logger.js")

const configuration = {
  apiKey: config.OPENAI_API_KEY,
};
const openai = new OpenAI(configuration);

// Generate AI response
const generateAIResponse = async (message) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Respond to this message: ${message}`,
      max_tokens: 150,
    });
    return response.data.choices[0].text.trim();
  } catch (err) {
    console.error("Error generating AI response:", err.message);
    throw new Error("AI response generation failed");
  }
};

// Sentiment analysis using OpenAI
const generateSentimentAnalysis = async (message) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Analyze the sentiment of this text and respond with "positive," "negative," or "neutral":\n\n${message}`,
      max_tokens: 10,
    });
    return response.data.choices[0].text.trim().toLowerCase();
  } catch (err) {
    console.error("Error in sentiment analysis:", err.message);
    throw new Error("Sentiment analysis failed");
  }
};

module.exports = { generateAIResponse, generateSentimentAnalysis };
