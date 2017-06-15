exports.seed = function(knex, Promise) {
  return knex('genres').del()
  .then(function () {
      return knex('genres').insert([
        {
          id: 1,
          genre: 'Fantasy'
        },
        {
          id: 2,
          genre: 'Science Fiction'
        },
        {
          id: 3,
          genre: 'Historical Fiction'
        },
        {
          id: 4,
          genre: 'Action-Adventure'
        }
      ]);
    });
};
