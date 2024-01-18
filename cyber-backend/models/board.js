const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

var Schema = mongoose.Schema;
const scoreSchema = new Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'users',
    trim: true
},
    score: {
        type: Number,
        required: true,
      }

})
const Score = mongoose.model('scoreboard', scoreSchema);
module.exports = Score