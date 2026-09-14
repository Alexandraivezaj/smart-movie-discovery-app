const express = require("express");
const router = express.Router();

const {
  llmSearch,
  llmRecommend,
} = require("../controllers/llmController");

router.post("/search", llmSearch);
router.post("/recommend", llmRecommend);

module.exports = router;
