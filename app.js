const express = require('express');
// const path = require('path');
const bodyParser = require('body-parser');
const games = require('./api/games-routes.js');
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use('/api/v1/games', games);

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});

module.exports = app;
