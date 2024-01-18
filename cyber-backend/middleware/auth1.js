const jwt = require('jsonwebtoken')
const Users = require('../models/User')
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'thisismynewcourse')
        const user = await Users.findOne({
            _id: decoded._id, 'tokens.token': token
        })
        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
        req.role = user.role
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}
module.exports = auth
