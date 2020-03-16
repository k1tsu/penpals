const app = require('express')();
const mongoose = require('mongoose');
const Letter = require('./models/Letter');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/penpals', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/api/test', (req, res) => {
  
});

app.listen(process.env.PORT || 8000, '0.0.0.0', () => console.log(`Listening on port ${process.env.PORT || 8000}.`));
