/* eslint-disable func-names */
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  display_name: {
    type: String,
    required: true
  },
  email: String,
  location: {
    country: {
      type: String
    },
    city: {
      type: String
    }
  },
  password: String
}, { collection: 'users' });

UserSchema.statics.findOrCreate = function (query, done) {
  const self = this;
  self.findOne(
    query, 
    (err, result) => {
      return result 
        ? done(err, result) 
        : self.create(query, (err, result) => { return done(err, result) })
    });
};

const User = model('User', UserSchema);

module.exports = User;
