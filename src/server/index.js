const app = require('express')();
const mongoose = require('mongoose');
const routes = require('./routes');

require('dotenv').config;

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

require('./passport')(app);

app.use('/api', routes);

app.use((err, req, res, next) => {
  if(!err.statusCode) err.statusCode = 500;

  res.status(err.statusCode)
    .json(err)
    .end()
});

app.listen(
  process.env.PORT || 8000,
  '0.0.0.0',
  () => console.log(`Listening on port ${process.env.PORT || 8000}.`)
);
