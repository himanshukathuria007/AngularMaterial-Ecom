const express = require('express');
const router = express.Router();
const db = require("../db");
const adminController = require("../controller/admin-controller");
//const Auth = require("../controller/authenticate-controller");
const Auth = require("../middleware/check-auth")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.get("/fetchusers", adminController.fetchUser);
router.get("/fetchsingleuser/:id", adminController.fetchSingleUser);
router.put("/login/passwordchange/:id",Auth.userAuth, adminController.updatePassword);


module.exports = router;