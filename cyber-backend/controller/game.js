const Scores = require("../models/board")

exports.addscore = (req, res) => {
  console.log(req.body.user_id)
  const scores = new Scores(
      req.body)
  scores.save().then(function () {
      res.send("score has been added")
  }).catch(function (e) {
      res.send(e)
  })
}

exports.getleaderboard = async (req, res) => {
    try {
        const findAllfeedback = await Scores.find().populate('user_id');
        res.send(findAllfeedback);
    } catch (e) {
        res.status(500).send(e);
    }
};