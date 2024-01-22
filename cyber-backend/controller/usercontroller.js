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

//function for Login Function
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



exports.finduser = async (req, res) => {
  Users.find().then(function (findalluser){
    res.send(findalluser).catch(function (e){
        res.send(e)
    })
  })
};

exports.profile = (req, res) => {
    Users.findById(req.params._id
    ).then(function (userdetail) {
        res.send(userdetail)
    })
}

//yaha bata taltira delete ko 

exports.delete = async (req, res) => {
    try {
        const deletedUser = await Users.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            // If the user with the given ID is not found, send a 404 Not Found response
            return res.status(404).json({ message: 'User not found' });
        }

        // If the user is successfully deleted, send a 204 No Content response
        res.status(204).send();
    } catch (error) {
        console.error(error);
        // Handle other errors with a 500 Internal Server Error response
        res.status(500).send('Internal Server Error');
    }
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

exports.updates = function (req, res) {

    req.files.map(function (img) {
        var images = img.filename

        Users.findByIdAndUpdate(req.params.id, { 'file': images }, { upsert: true }, (err, docs) => {
            if (err) {
                return res
                    .status(500)
                    .send({ error: "unsuccessful" })
            } else {
                console.log(images)
                res.send("Profile Picture Update successfull !" + docs)
            }
        })
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
