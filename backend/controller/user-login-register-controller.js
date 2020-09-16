var bcrypt = require("bcryptjs");
const User = require("../models/Users");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  var today = new Date();
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        var user = {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: hashedPassword,
          role: req.body.role,
          created_at: today,
          updated_at: today,
        };
        User.create(user)
          .then((user) => {
            res.json({ msg: "user created" });
          })
          .catch((err) => {
            res.send("error" + err);
          });
      } else {
        res.json({ error: "User already exists!!" });
      }
    })
    .catch((err) => {
      res.send("error" + err);
    });
};

exports.login = (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({
    where: {
      email
    },
  })
    .then((user) => {
      if (!user) {
        res.json({ msg: "User not available" });
      } else {
        matchPassword = bcrypt.compare(password, user.password);

        let token = jwt.sign(
          {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role: user.role,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: process.env.JWT_EXPIRES_IN,
          }
        );

        if (matchPassword) {
          res.json({
            status: true,
            msg: "Login Successfully",
            token,
            role: user.role,
            id: user.id,
            firstname: user.firstname
          });
        }
      }
    })
    .catch((err) => {
      res.send("error" + err);
    });
};
