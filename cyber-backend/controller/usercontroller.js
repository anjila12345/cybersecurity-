const Users = require("../models/User")

//function for adding trip
exports.adduser = (req, res) => {
    const User = new Users(
        req.body)
    User.save().then(function () {
        res.send("User has been added")
    }).catch(function (e) {
        res.send(e)
    })
}



exports.login = async (req, res) => {
    try {
        const user = await Users.checkCrediantialsDb(req.body.username,
            req.body.password);
        console.log(user)
        if (user != null) {
            const token = await user.generateAuthToken()
            res.json({
                token: token,
                success: true,
                user: user
            });
            console.log("success")
        }
        else {
            res.json({
                success: false
            })
        }
    }
    catch (e) {
        res.status(400).send()
    }
}
//function for login check
exports.logincheck = async (req, res) => {
    res.send(req.user)
    console.log(req.user)
}

// //get ko lagi code
exports.finduser = async (req, res) => {
    try {
        const findAlluser = await Users.find();
        res.send(findAlluser);
    } catch (e) {
        res.status(500).send(e);
    }
}

exports.profile = (req, res) => {
    Users.findById(req.params._id
    ).then(function (userdetail) {
        res.send(userdetail)
    })
}


exports.delete = function (req, res) {
    Users.findByIdAndDelete(req.params.id).then(function () {

    }).catch(function () {
        res.send(e)
    })
};


exports.update = function (req, res) {
    console.log(req.body)
    Users.findByIdAndUpdate(req.params.id, req.body).then(function () {
        res.send("updated")
    }).catch(function (e) {
        res.send(e)
    })

}



exports.logout = (req, res) => {
    req.user.deleteToken(req.token, (err, user) => {
        if (err) return res.status(400).send(err);
        res.sendStatus(200)
    })
}


exports.admin = function (req, res) {
    user_type = req.user_type
    if (user_type == "admin") {
        res.send("hello admin")
    }
    else {
        res.send("please authenticate..");
    }
}
