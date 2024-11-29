const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/auth.route.js");
const moodRoutes = require("./routes/mood.route.js");
const chatRoutes = require("./routes/chat.route.js");
const errorHandler = require("./middlewares/error_handler.middleware.js");

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/moods", moodRoutes);
app.use("/api/chats", chatRoutes);

// Error Handler
app.use(errorHandler);

module.exports = app;
