const express = require('express');
const router = express.Router();
const db = require("../db");
const registerController = require("../controller/user-login-register-controller");
//const loginController = require("../controller/login-controller");
//const Auth = require("../controller/authenticate-controller");
const Auth = require("../middleware/check-auth")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/register", registerController.register);
router.post("/login", registerController.login);

// router.get("/fetchusers", loginController.fetchUser);
// router.get("/fetchsingleuser/:id", loginController.fetchSingleUser);
// router.put("/login/passwordchange/:id",Auth.userAuth, loginController.updatePassword);


module.exports = router;