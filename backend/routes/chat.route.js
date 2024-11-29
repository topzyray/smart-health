const express = require("express");
const { sendMessage } = require("../controllers/chat.controller.js")
const { authenticate } = require("../middlewares/auth.middleware.js")
const router = express.Router();

router.post("/", authenticate, sendMessage);

module.exports = router;