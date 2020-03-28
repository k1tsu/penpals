const admin = require('../firebase');

const verifyIdToken = (idToken) => {
  return new Promise((res, rej) => {
    admin.auth().verifyIdToken(idToken)
      .then(user => res({ ...user }))
      .catch(err => rej(err))
  })
};

module.exports = verifyIdToken;
