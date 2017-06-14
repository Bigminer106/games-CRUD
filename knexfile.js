// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/games'
  },

  // ```heroku addons:create heroku-postgresql:hobby-dev```, then add the below ⇣

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
