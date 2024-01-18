const express = require("express");
const router = express.Router();
const Score = require('../models/board')
const auth = require('../middleware/auth1');
const Game = require('../controller/game')
router.post("/quiz", Game.addscore)



module.exports = router