const express = require("express");
const router = express.Router();
const Score = require('../models/board');
const auth = require('../middleware/auth');

const Game = require('../controller/game')

router.post("/quiz", Game.addscore)

router.get("/leaderboard", Game.getleaderboard)

module.exports = router
