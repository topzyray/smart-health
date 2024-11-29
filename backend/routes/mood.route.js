const express = require("express");
const { addMood, getMoods } = require("../controllers/mood.controller.js");
const { protect } = require("../middlewares/auth.middleware.js");

const router = express.Router();

router.post("/", protect, addMood);
router.get("/", protect, getMoods);

module.exports = router;
