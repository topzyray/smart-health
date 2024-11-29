const mongoose = require("mongoose");
const { DB_URI } = require("./env");

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Database connected successfully!");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
