const gamesSeeds_1 = require('../seeds/01_games.js');

const gamesSeeds_2 = require('../seeds/02_genres.js');

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE games RESTART IDENTITY CASCADE;')
  .then(function() {
    return knex('games').insert(gamesSeeds_1);
  });
};

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE games RESTART IDENTITY CASCADE;')
  .then(function() {
    return knex('games').insert(gamesSeeds_2);
  });
};
