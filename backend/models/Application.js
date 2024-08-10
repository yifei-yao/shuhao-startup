// backend/models/Application.js
const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  resume: { type: String, required: true }, // Store the file path or name
  message: { type: String },
  school: { type: String }, // New field for school
  major: { type: String }, // New field for major
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Application", applicationSchema);
