const express = require('express');
const router = express.Router();
const db = require("../db");
const sellerController = require("../controller/seller-controller");

const Auth = require("../middleware/check-auth")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/sellerregister", sellerController.sellerregister);
router.post("/sellerlogin", sellerController.sellerlogin);


module.exports = router;