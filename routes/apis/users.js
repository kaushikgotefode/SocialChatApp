const express = require("express");
const gravatar = require("gravatar");
const bcript = require("bcryptjs");

const router = express.Router();
// Load User
const User = require("../../models/User");

// @route  'apis/users/test'
// @desc   tests users routes
// @access public
router.get("/test", (req, res) => {
  res.json({
    msg: "users works"
  });
});

// @route  'apis/users/register'
// @desc   Register route
// @access public

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      res.status(400).json({
        email: "Email already exits"
      });
    } else {
      const avatar = gravatar.url(email, {
        s: "200", //Size
        r: "pg", //Rating
        d: "mm" //Default
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });
      bcript.genSalt(10, (err, salt) => {
        bcript.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
