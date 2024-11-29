const express = require("express");
const { logMood, getMoodLogs } = require("../controllers/mood.controller.js");
const { authenticate } = require("../middlewares/auth.middleware.js");

const router = express.Router();

router.post("/", authenticate, logMood);
router.get("/", authenticate, getMoodLogs);

module.exports = router;
