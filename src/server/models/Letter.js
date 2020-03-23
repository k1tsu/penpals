const { Schema, model, Types } = require('mongoose');

const LetterSchema = new Schema({
  author: {
    type: Types.ObjectId,
    ref: 'User',
    required: true
  },
  text: {
    type: String,
    required: true
  },
  receiver: {
    type: Types.ObjectId,
    ref: 'User'
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  available_at: {
    type: Date
  }
}, { collection: 'letters' });

const Letter = model('Letter', LetterSchema);

module.exports = Letter;
