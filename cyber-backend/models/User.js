const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

var Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: false,
        unique: true
    },
    image: {
        type: Object,
        default: 'user.png'
    },
    password: {
        type: Object,
        default: null
    },
    role: {
        type: String,
        default: 'User'
    },
    wishlist:[{
        type: Schema.Types.ObjectId,
        ref: 'postdetail'
    }],
    tokens: [{
        token: {
            type: String,
            required: true
        }

    }]
})



userSchema.statics.checkCrediantialsDb = async (username, password) => {

    const user1 = await User.findOne({ username: username, password: password })
    return user1;
}


userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse')

    console.log(token);
    user.tokens = user.tokens.concat({ token: token })
    await user.save()
    return token
}




const User = mongoose.model('users', userSchema)

module.exports = User