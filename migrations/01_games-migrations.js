exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', (table) => {
    table.increments();
    table.text('title').notNullable();
    table.text('description');
    table.float('rating');
    table.text('url');
    table.text('platforms').notNullable();
  }) && knex.schema.createTable('genres', (table) => {
    table.increments();
    table.text('genre').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games') && knex.schema.dropTable('genres')
};