const router = require('express').Router();
const passport = require('passport');
const { ObjectId } = require('mongoose').Types;
const Letter = require('../models/Letter');

router.get('/:id/getLetters', async (req, res, next) => {
  const { id } = req.params;

  const results = await Letter.find({ author: ObjectId(id) });

  res.status(200)
    .json(results)
    .end()
});

router.get('/auth', 
  passport.authenticate('google', {
      scope: 'https://www.googleapis.com/auth/plus.login'
  }))

module.exports = router;
