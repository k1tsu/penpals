const admin = require('firebase-admin');
const serviceAccount = require('./firebase.json');
const dotenv = require('dotenv');

dotenv.config();

const {
  DATABASE_URL
} = process.env;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: DATABASE_URL
})

module.exports = admin;