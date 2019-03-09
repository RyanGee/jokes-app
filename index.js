const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jokeRoutes = require('./routes/jokes');
const userRoutes = require('./routes/users');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3050;

app.set('secretKey', 'superSecretSauce');

mongoose.connect('mongodb://localhost/jokes', { useNewUrlParser: true });
const db = mongoose.connection;

app.get('/', (req, res) => res.send('A simple jokes app'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/jokes', validateUser, jokeRoutes);
app.use('/users', userRoutes);

function validateUser(req, res, next) {
  jwt.verify(req.headers['auth'], req.app.get('secretKey'), function(err, decoded) {
    if (err) {
      res.json({
        status: "error",
        message: "You must be logged in to do that!"
      });
    } else {
      next();
    }
  });
}

app.listen(port, function () {
  console.log('Simple jokes app running on port 3050.');
});
