/* eslint-disable func-names */
const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  sent: [{ type: Types.ObjectId, ref: 'Letter' }],
  received: [{ type: Types.ObjectId, ref: 'Letter' }]
}, { collection: 'users' });

UserSchema.statics.getRandomUser = function (senderId, callback) {
  this.countDocuments().exec((err, count) => {
    if (err) return callback(err);

    const random = Math.floor(Math.random * count);

    this.findOne({ _id: { $ne: senderId } })
      .skip(random)
      .exec(callback);
  });
};

const User = model('User', UserSchema);

module.exports = User;
