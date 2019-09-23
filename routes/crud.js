const express = require('express');
const router = express.Router();
const Data = require('../models/data')

// get list of data
router.get('/data', function (req, res, next) {
  res.send({ type: 'GET' });
})

// add data to database
router.post('/data', function (req, res, next) {
  Data.create(req.body).then(function (data) {
    res.send(data);
  }).catch(next);
});

// update data in database
router.put('/data/:id', function (req, res, next) {
  Data.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false }).then(function () {
    Data.findOneAndDelete(req.params.id).then(function (data) {
      res.send({ data });
    })
  })
});

// delete data from databse
router.delete('/data/:id', function (req, res, next) {
  Data.findByIdAndRemove({ _id: req.params.id }, { useFindAndModify: false }).then(function (data) {
    res.send(data)
  })
});

// export module
module.exports = router;