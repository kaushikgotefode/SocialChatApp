const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const validateProfileInputs = require("./../../validator/profile");

const Profile = require("./../../models/Profile");
const User = require("./../../models/User");

// @route  'apis/profile/test'
// @desc   tests profile routes
// @access public
router.get("/test", (req, res) => {
  res.json({
    msg: "profile works"
  });
});

// @route  'apis/profile'
// @desc   User profile routes
// @access private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id }).then(profile => {
      if (!profile) {
        errors.profileNotFound = "User Profile not found for this user";
        res.status(404).json(errors);
      }
    });
  }
);

// @route  'apis/profile'
// @desc   Create/Edit User Profile
// @access private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInputs(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const profileObj = {};
    profileObj.user = req.user.id;
    if (req.body.handle) profileObj.handle = req.body.handle;
    if (req.body.status) profileObj.status = req.body.status;
    if (req.body.company) profileObj.company = req.body.company;
    if (req.body.website) profileObj.website = req.body.website;
    if (req.body.location) profileObj.location = req.body.location;
    if (req.body.bio) profileObj.bio = req.body.bio;
    if (req.body.gitHubUserName)
      profileObj.githubUserName = req.body.githubUserName;

    //Skills
    if (typeof req.body.skills !== "undefined")
      profileObj.skills = req.body.skills.split(",");
    //Social
    profileObj.social = {};
    if (req.body.youtube) profileObj.social.youtube = req.body.youtube;
    if (req.body.linkedIn) profileObj.social.linkedIn = req.body.linkedIn;
    if (req.body.twitter) profileObj.social.twitter = req.body.twitter;
    if (req.body.facebook) profileObj.social.facebook = req.body.facebook;
    if (req.body.instagram) profileObj.social.instagram = req.body.instagram;

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        //Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileObj },
          { new: true, useFindAndModify: false }
        ).then(profile => res.json(profile));
      } else {
        //create
        // check for handle
        Profile.findOne({ handle: profileObj.handle }).then(profile => {
          if (profile) {
            errors.handle = "Profile handle already exist";
            res.status(400).json({ errors });
          }
          // save profile
          new Profile(profileObj).save().then(profile => res.json(profile));
        });
      }
    });
  }
);

module.exports = router;
