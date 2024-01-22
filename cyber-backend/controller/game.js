const Scores = require("../models/board")

exports.addscore= async (req, res) => {
  try {
    const { userId, score } = req.body;
    const newScore = new Scores({ user: userId, score });
    await newScore.save();
    res.status(201).json({ message: 'Score saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}


