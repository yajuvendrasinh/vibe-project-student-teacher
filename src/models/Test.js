const mongoose = require('mongoose');

const testSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['Class Test', 'Mock Test'],
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    subjects: {
      type: [String],
      required: true,
    },
    className: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Test', testSchema);
