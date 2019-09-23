const express = require('express');
const mongoose = require('mongoose');

// setup express app
const app = express();

// connect to MongoDB
mongoose.connect("mongodb://localhost/datago", {
  useUnifiedTopology: true, useNewUrlParser: true
});

// use express.json (apply before routes)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use our specified routes
app.use('/crud', require('./routes/crud'))

// error handling middleware
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message })
})

// listen for requests in assigned port otherwise listen on port 4000
app.listen(process.env.port || 4001, function () {
  console.log('now listening for requests');
})