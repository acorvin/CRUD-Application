const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create data Schema and model
const DataSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  title: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }
})

// create a const for the Data
const Data = mongoose.model('data', DataSchema);

// export Data module
module.exports = Data;