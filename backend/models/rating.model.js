const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  rating: {
    type: String, required: true
  }, 
}, {
  timestamps: true,
});


module.exports = mongoose.model('Rating', ratingSchema);