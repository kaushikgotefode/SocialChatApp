const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const validateProfileInputs = require("./../../validator/profile");
const validateExperienceInputs = require("./../../validator/experience");
const validateEducationInputs = require("./../../validator/education");

const Profile = require("./../../models/Profile");
const User = require("./../../models/User");

// @route  'apis/profile/user/:userId'
// @desc   Get profile routes
// @access public
router.get("/user/:userId", (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.params.userId }).then(profile => {
    if (!profile) {
      errors.noProfile = "There is no profile for this user.";
      res.status(404).json(errors);
    }
    res.json(profile);
  });
});

// @route  'apis/profile/handle/:handle'
// @desc   Get profile routes
// @access public
router.get("/handle/:handle", (req, res) => {
  const errors = {};
  Profile.find({ handle: req.params.handle })
    .then(profile => {
      if (!profile) {
        errors.noProfile = "There is no profile for this user.";
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => {
      res.json({ profile: "There is no profile" });
    });
});

// @route  'apis/profile/user/:userId'
// @desc   Get profile routes
// @access public
router.get("/all", (req, res) => {
  const errors = {};
  Profile.find().then(profiles => {
    if (!profiles) {
      errors.noProfile = "There are no profiles.";
      res.status(404).json(errors);
    }
    res.json(profiles);
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

// @route  'apis/profile/experience'
// @desc   Add/Edit Experience Profile
// @access private

router.post(
  "/experience",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateExperienceInputs(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Profile.findOne({ user: req.user.id }).then(profile => {
      const newExperience = {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };
      profile.experience.unshift(newExperience);
      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route  'apis/profile/education'
// @desc   Add/Edit Education Profile
// @access private
router.post(
  "/education",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEducationInputs(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Profile.findOne({ user: req.user.id }).then(profile => {
      const newEducation = {
        school: req.body.school,
        degree: req.body.degree,
        fieldOfStudy: req.body.fieldOfStudy,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };
      profile.education.unshift(newEducation);
      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route  DELETE 'apis/profile/experience/:expId'
// @desc   Delete Experience from Profile
// @access private

router.delete(
  "/experience/:expId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      const index = profile.experience
        .map(exp => exp.id)
        .indexOf(req.params.expId);
      profile.experience.splice(index, 1);
      profile.save().then(profile => res.json(profile));
    });
  }
);
// @route  DELETE 'apis/profile/education/:eduId'
// @desc   Delete Education from Profile
// @access private

router.delete(
  "/education/:eduId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      const index = profile.education
        .map(edu => edu.id)
        .indexOf(req.params.eduId);
      profile.education.splice(index, 1);
      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route  DELETE 'apis/profile/:id'
// @desc   Delete Profile and User
// @access private

router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOneAndDelete({ user: req.user.id }).then(() => {
      User.findOneAndDelete({ id: req.user.id }).then(() => {
        res.json({ success: true });
      });
    });
  }
);
module.exports = router;
