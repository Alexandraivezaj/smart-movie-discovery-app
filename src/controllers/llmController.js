const OpenAI = require("openai").default;

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// this runs when user searches for smhthing
async function llmSearch(req, res) {
  const query = req.body.query;

  if (!query) {
    return res.status(400).json({ error: "need a query" });
  }

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: "give 2 real well known funny sci fi movies with short reasons no intro: " + query
        }
      ]
    });

    res.json({
      query,
      result: response.choices[0].message.content
    });
  } catch (err) {
    console.log("error in search:", err);
    res.status(500).json({ error: "error happened" });
  }
}

// this runs when user wants a recommendation.
async function llmRecommend(req, res) {
  const prompt = req.body.prompt;

  if (!prompt) {
    return res.status(400).json({ error: "need a prompt" });
  }

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: "pick a movie for this: " + prompt
        }
      ]
    });

    res.json({
      prompt,
      recommendation: response.choices[0].message.content
    });
  } catch (err) {
    console.log("error in recommend:", err);
    res.status(500).json({ error: "error happened" });
  }
}

module.exports = {
  llmSearch,
  llmRecommend,
};
