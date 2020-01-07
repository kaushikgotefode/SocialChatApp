const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const validatePostInputs = require("./../../validator/post");
const Profile = require("./../../models/Profile");
const Post = require("./../../models/Post");

// @route  'apis/posts/test'
// @desc   tests posts routes
// @access public
router.get("/test", (req, res) => {
  res.json({
    msg: "posts works"
  });
});

// @route  GET 'apis/posts'
// @desc    posts routes
// @access public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ noPosts: "No posts found" }));
});

// @route  GET 'apis/posts:id'
// @desc   posts routes
// @access public
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ noPosts: "No posts found with that ID" })
    );
});

// @route  POST 'apis/posts/'
// @desc   tests posts routes
// @access public
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInputs(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });
    newPost.save().then(post => res.json(post));
  }
);

// @route  DELETE 'apis/posts:id'
// @desc   posts routes
// @access private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        Post.findById(req.params.id).then(post => {
          if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ notAuthorize: "User not authorize" });
          }
          post.remove().then(() => {
            res.json({ success: true });
          });
        });
      })
      .catch(err => res.status(404).json({ noPosts: "No post found" }));
  }
);

// @route  POST 'apis/posts/like:id'
// @desc   like post routes
// @access private
router.post(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        Post.findById(req.params.id).then(post => {
          if (post.likes.filter(item => item.user.toString()).length > 0) {
            return res
              .status(401)
              .json({ noLike: "You already liked this post" });
          }
          post.likes.unshift({ user: req.params.id });
          post.save().then(post => res.json(post));
        });
      })
      .catch(err => res.status(404).json({ noPosts: "No post found" }));
  }
);

// @route  POST 'apis/posts/like:id'
// @desc   like post routes
// @access private
router.post(
  "/unlike/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        Post.findById(req.params.id).then(post => {
          if (post.likes.filter(item => item.user.toString()).length === 0) {
            return res
              .status(401)
              .json({ noLike: "You have not like this post" });
          } else {
            const removeIndex = post.likes
              .map(item => item.user.toString())
              .indexOf(req.params.id);
            post.likes.splice(removeIndex, 1);
          }
          post.save().then(post => res.json(post));
        });
      })
      .catch(err => res.status(404).json({ noPosts: "No post found" }));
  }
);

// @route  POST 'apis/posts/comment:id'
// @desc   comment to the post
// @access private
router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInputs(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        Post.findById(req.params.id).then(post => {
          const newComment = {
            text: req.body.text,
            name: req.body.name,
            avatar: req.body.avatar
          };
          post.comments.unshift(newComment);
          post.save().then(post => res.json(post));
        });
      })
      .catch(err => res.status(404).json({ noPosts: "No post found" }));
  }
);

// @route  DELETE 'apis/likes:id'
// @desc   posts routes
// @access private
router.delete(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        Post.findById(req.params.id).then(post => {
          if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ notAuthorize: "User not authorize" });
          } else {
            const commentIndex = post.comments
              .map(item => item.id)
              .indexOf(req.params.id);
            post.comments.splice(commentIndex, 1);
            post.save().then(post => res.json(post));
          }
        });
      })
      .catch(err => res.status(404).json({ noPosts: "No post found" }));
  }
);

module.exports = router;
