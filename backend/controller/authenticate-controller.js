var connection = require("../db");
var bcrypt = require('bcryptjs');

exports.authenticate = function (req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  connection.query("SELECT * FROM users WHERE email = ?", [email], function (
    error,
    results,
    fields
  ) {
    if (error) {
      res.json({
        status: false,
        message: "there are some error with query",
      });
    } else {
      if (results.length > 0) {
        if (bcrypt.compare(password, results[0].password)) {
          // res.json({
          //     status:true,
          //     message:'successfully authenticated'
          // })
          next();
        } else {
          res.json({
            status: false,
            message: "Email and password does not match",
          });
        }
      } else {
        res.json({
          status: false,
          message: "Email does not exits",
        });
      }
    }
  });
};
