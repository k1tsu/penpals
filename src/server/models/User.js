/* eslint-disable func-names */
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String
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
  picture: {
    type: String
  },
  password: String,
  googleId: String
}, { collection: 'users' });

UserSchema.statics.findOrCreate = function (query, done) {
  const self = this;
  self.findOne(
    query,
    (err, result) => (
      result
        ? done(err, result)
        : self.create(query, (nErr, nResult) => done(nErr, nResult)))
  );
};

const User = model('User', UserSchema);

module.exports = User;
