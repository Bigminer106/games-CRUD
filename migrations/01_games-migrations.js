exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', (table) => {
    table.increments();
    table.text('title').notNullable();
    table.text('description');
    table.float('rating');
    table.text('url');
    table.text('platforms').notNullable();
    table.integer('genre_id')//.unsigned().index().references('genres.id')
 });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games')
};
