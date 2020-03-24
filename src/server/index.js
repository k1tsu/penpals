const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

require('dotenv').config();

app.use('/', express.static('./public'));

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api', routes);

app.use((err, req, res, next) => {
  if (!err.statusCode) err.statusCode = 500;

  res.status(err.statusCode)
    .json(err)
    .end();
});

app.listen(
  process.env.PORT || 8000,
  '0.0.0.0',
  () => console.log(`Listening on port ${process.env.PORT || 8000}.`)
);
