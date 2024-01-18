const express = require("express");
const router = express.Router();
const Users = require('../models/User')
const auth = require('../middleware/auth1');
const UserController = require('../controller/usercontroller')



router.post("/register", UserController.adduser)
router.post("/login", UserController.login)


router.get("/logincheck", auth, UserController.logincheck)
router.post("/userlogout", auth, UserController.logout)

router.get("/finduser", UserController.finduser)

router.delete("/delete/:id", UserController.delete)


module.exports = router