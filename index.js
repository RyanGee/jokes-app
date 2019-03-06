const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3050;

mongoose.connect('mongodb://localhost/jokes', { useNewUrlParser: true });
const db = mongoose.connection;

app.get('/', (req, res) => res.send('A simple jokes app'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/jokes', routes);

app.listen(port, function () {
  console.log('Simple jokes app running on port 3050.');
});
