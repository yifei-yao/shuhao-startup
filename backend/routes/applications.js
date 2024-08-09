// backend/routes/applications.js
const express = require('express');
const Application = require('../models/Application');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Endpoint to submit a job application
router.post('/', authMiddleware, async (req, res) => {
  const { name, email, resume, message } = req.body;
  try {
    const newApplication = new Application({
      name,
      email,
      resume,
      message,
    });
    await newApplication.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

