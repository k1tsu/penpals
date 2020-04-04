const { Schema, model, Types } = require('mongoose');

const LetterSchema = new Schema({
  author: {
    uid: {
      type: String,
      required: true
    },
    display_name: {
      type: String,
      required: true
    }
  },
  text: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  receiver: {
    type: String
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
