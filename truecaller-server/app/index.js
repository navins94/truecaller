const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const path = require('path');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/post', require('./routes/post.routes'));
app.use('/post/:detail', require('./routes/post.routes'));
app.use('/categories', require('./routes/categories.routes'));
app.use('/tags', require('./routes/tags.routes'));
app.use('/related', require('./routes/related.routes'));
app.get('/', (req, res) => res.send('Hello from Truecaller Blog API'));

app.use(function (req, res, next) {
  next(createError(404));
});

//Global Error Handler
app.use(function (err, req, res, _next) {
  // If it's a ValidationError send a standard response.
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message, errors: err.errors });
  }
  //Convert standard HTTP error's to responses
  if (err.name === 'CastError') {
    return res.status(400).json({ error: err.reason });
  }

  if (err instanceof createError.HttpError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  res.status(500).json({ error: err.message });
});

module.exports = app;
