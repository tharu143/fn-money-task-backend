// controllers/assessmentController.js
const Assessment = require('../models/Assessment');

// Create a new assessment
exports.createAssessment = async (req, res) => {
  const { task, description, file } = req.body;
  try {
    const assessment = new Assessment({ task, description, file, user: req.user });
    await assessment.save();
    res.status(201).json({ message: 'Assessment created successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Failed to create assessment', error });
  }
};

// Get all assessments
exports.getAssessments = async (req, res) => {
  try {
    const assessments = await Assessment.find({ user: req.user });
    res.json(assessments);
  } catch (error) {
    res.status(400).json({ message: 'Failed to retrieve assessments', error });
  }
};
