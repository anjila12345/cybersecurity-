const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

var Schema = mongoose.Schema;
const scoreSchema = new Schema({
  user_id: {
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