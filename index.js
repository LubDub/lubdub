'use strict';
const express = require('express');
const PORT = 3001;
const app = express();

app.get('/', function (req, res) {
	res.send('<h1>Lub Dub</h1>');
});

app.get('/api', function (req, res, next) {
  var doc = { 
    running: true
  };

  res.json(doc);
});

app.listen(PORT);
console.log('Running @ localhost:' + PORT);