const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('games');
  },
  getOne(id) {
    return knex('games').where('id', id).first();
  },
  create(game) {
    return knex('games').insert(game, '*');
  },
  update(id, game) {
    return knex('games').where('id', id).update(game);
  },
  delete(id) {
    return knex('games').where('id', id).del();
  }
}
