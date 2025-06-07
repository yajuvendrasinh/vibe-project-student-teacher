const mongoose = require('mongoose');

const testScoreSchema = new mongoose.Schema(
  {
    test: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Test',
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// Compound unique index
testScoreSchema.index({ test: 1, student: 1, subject: 1 }, { unique: true });

module.exports = mongoose.model('TestScore', testScoreSchema);
