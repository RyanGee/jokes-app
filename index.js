const express = require('express');
const app = express();

const port = process.env.PORT || 3050;

const routes = require('./routes');

app.use('/jokes', routes);

app.get('/', (req, res) => res.send('A simple jokes app'));

app.listen(port, function () {
  console.log('Simple jokes app running on port 3050.');
});
