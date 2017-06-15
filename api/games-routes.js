const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidID(req, res, next) {
  if(!isNaN(req.params.id)) {
    return next();
  } else {
    next(new Error('Invalid ID'));
  }
};

function validGame(game) {
  const hasTitle = typeof game.title == 'string' && game.title.trim() != '';
  const hasURL = typeof game.url == 'string' && game.url.trim() != '';
  const hasDescription = typeof game.description == 'string' && game.description.trim() != '';
  const hasRating = !isNaN(game.rating) != null;
  const hasPlatform = typeof game.platform == 'string' && game.platform.trim() != '';
  return hasTitle && hasURL && hasDescription && hasRating && hasPlatform;
};

router.get('/', (req, res) => {
  queries.getAll().then(games => {
    res.json(games);
  })
});

router.get('/:id', isValidID, (req, res) => {
  queries.getOne(req.params.id).then(game => {
    res.json(game);
  })
});

router.post('/', (req, res, next) => {
  if (validGame(req.body)) {
    queries.create(req.body).then(games => {
      res.json(games[0]);
    })
  } else {
    next(new Error('Invalid Game'))
  }
});

router.put('/:id', isValidID, (req, res, next) => {
  if (validGame(req.body)) {
    queries.update(req.params.id, req.body).then(games => {
      res.json(games[0]);
    })
  } else {
    next(new Error('Invalid Game'))
  }
});

router.delete('/:id', isValidID, (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      deleted: true
    });
  });
});
