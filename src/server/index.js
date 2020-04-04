const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const admin = require('./firebase');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static('./public'));

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api', routes);

app.listen(
  process.env.PORT || 8000, 
  '0.0.0.0',
  () => console.log(`Listening on port ${process.env.PORT || 8000}.`)
);
