const router = require('express').Router();
const { ObjectId } = require('mongoose').Types;
const Letter = require('../models/Letter');

router.get('/:id/getLetters', async (req, res, next) => {
  const { id } = req.params;

  const results = await Letter.find({ author: ObjectId(id) });

  res.status(200)
    .json(results)
    .end();
});

module.exports = router;
