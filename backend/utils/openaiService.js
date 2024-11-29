const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const analyzeSentiment = async (text) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Analyze the sentiment of this text: "${text}"`,
      max_tokens: 50,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("OpenAI Error:", error);
    throw new Error("Failed to analyze sentiment.");
  }
};

module.exports = { analyzeSentiment };
