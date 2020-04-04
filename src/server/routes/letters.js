const { Router } = require('express');
const { Types } = require('mongoose');
const Letter = require('../models/Letter');
const verifyIdToken = require('../helpers/verifyIdToken');

const router = Router();

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  const isValid = Types.ObjectId.ObjectId.isValid(id);

  if (!isValid) {
    res.status(422)
      .json({
        error: true,
        message: 'Invalid ObjectId.'
      })
      .end();

    return;
  }

  Letter.findOne({ _id: Types.ObjectId(id) })
    .then((data) => {
      res.status(200)
        .json(data)
        .end();
    })
    .catch(err => next(err));
});

router.post('/send', (req, res) => {
  const { authorId, title, message } = req.body;
  let author;

  verifyIdToken(authorId)
    .then((user) => {
      author = user;
    })
    .catch(err => res.status(401).end());

  const newLetter = new Letter({
    author: {
      uid: author.uid,
      display_name: 'empty for a while'
    },
    text: message,
    title
  });

  newLetter.save();
});

router.get('/user/:userUid', (req, res, next) => {
  const { userUid } = req.params;

  Letter.find({ receiver: userUid })
    .exec()
    .then((data) => {
      res.status(200)
        .json(data)
        .end()
    })
    .catch(err => next(err))
});

module.exports = router;
