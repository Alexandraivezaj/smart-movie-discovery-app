require("dotenv").config();

const express = require("express");

const authRoutes = require("./src/routes/auth");
const movieRoutes = require("./src/routes/movies");
const llmRoutes = require("./src/routes/llm");

const app = express();

// middlewareto  parse json
app.use(express.json());

// basic route wanna check if serv. is run.
app.get("/", (req, res) => {
  res.send("API is running");
});

// routes
app.use("/auth", authRoutes);
app.use("/movies", movieRoutes);
app.use("/llm", llmRoutes);

// start serv.
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
