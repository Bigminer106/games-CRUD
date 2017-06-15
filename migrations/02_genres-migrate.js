exports.up = function(knex, Promise) {
  return knex.schema.createTable('genres', (table) => {
    table.increments();
    table.text('genre').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('genres')
};
