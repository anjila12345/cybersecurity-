const express = require("express");
const router = express.Router();
const Users = require('../models/User')
const auth = require('../middleware/auth');
const UserController = require('../controller/usercontroller')


router.post("/register", UserController.adduser)
router.post("/login", UserController.login)
router.get("/logincheck", auth, UserController.logincheck)

router.delete("/del/:id", UserController.delete)
router.post("/logout", auth, UserController.logout)
router.get("/admin_dashboard", auth, UserController.admin)

router.put("/updates/:id", UserController.update)

router.get("/finduser", UserController.finduser)

module.exports = router