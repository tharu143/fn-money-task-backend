// routes/assessmentRoutes.js
const express = require('express');
const { createAssessment, getAssessments } = require('../controllers/assessmentController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Create assessment
router.post('/', authMiddleware, createAssessment);

// Get assessments
router.get('/', authMiddleware, getAssessments);

module.exports = router;
