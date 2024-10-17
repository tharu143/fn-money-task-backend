// models/Assessment.js
const mongoose = require('mongoose');

const AssessmentSchema = new mongoose.Schema({
  task: { type: String, required: true },
  description: { type: String, required: true },
  file: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Assessment', AssessmentSchema);
