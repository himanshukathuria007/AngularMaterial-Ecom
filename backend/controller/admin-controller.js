const connection = require("../db");
const bcrypt = require("bcryptjs");
const User = require("../models/Users");
const jwt = require('jsonwebtoken');

// exports.login = (req, res) => {
//   var email = req.body.email;
//   var password = req.body.password;

//   connection.query("SELECT * FROM users WHERE email = ?", [email], async (
//     error,
//     results,
//   ) => {
//     if (error) {
//       res.json({
//         status: false,
//         message: "there are some error with query",
//       });
//       console.log(results)
//     } else {
//       if (results.length > 0) {
//         if (await bcrypt.compare(password, results[0].password)) {
//           const token = jwt.sign(
//             {
//               id: results[0].id,
//               email: results[0].email,
//               role: results[0].role,
//             },
//             process.env.JWT_SECRET,
//             {
//               expiresIn: process.env.JWT_EXPIRES_IN,
//             }
//           );
//           res.status(200).json({
//             status: true,
//             message: "successfully login",
//             token,
//             data: results[0]
//           });
//         } else {
//           res.status(403).json({
//             status: false,
//             message: "Email and password does not match",
//           });
//         }
//       } else {
//         res.status(403).json({
//           status: false,
//           message: "Email does not exits",
//         });
//       }
//     }
//   });
// };

// exports.fetchUser = async (req, res, next) => {
//   let sql = "SELECT * FROM users";
//   connection.query(sql, (err, result) => {
//     if (err) {
//       throw err;
//     }
//     console.log(result);
//     res.send({ result });
//   });
// };


exports.fetchUser = async (req, res, next) => {
  User.findAll()
    .then((users) => {
      if (!users) {
        res.json({ msg: "No User available" });
      } else {
          res.json({
            status: true,
            msg: "Users fetched",
            users
          });
      }
    })
    .catch((err) => {
      res.send("error" + err);
    });
};

exports.fetchSingleUser = (req, res, next) => {
  User.findOne({
    where:{
      id:req.params.id
    },
  })
  .then((user => {
    if (!user) {
      res.json({ msg: "No User available" });
    } else {
        res.json({
          status: true,
          msg: "User fetched",
          user
        });
    }
  })
  )
  .catch((err) => {
    res.send("error" + err);
  })
  };

exports.updatePassword = async (req, res, next) => {
  var password = req.body.password;
  newpassword = await bcrypt.hash(req.body.newpassword,10);
 
  let sql = `SELECT * FROM users WHERE id = ${req.params.id} LIMIT 1`;
  connection.query(sql, async (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    if (await bcrypt.compare(password, result[0].password)) {
      let sql = `UPDATE users SET password = ? where id = ${req.params.id}`;
      connection.query(sql,newpassword, (err, result) => {
        if (err) {
          throw err;
        }
        res.send({ result });
      });
    }
  });
};