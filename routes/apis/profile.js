const express = require("express");
const router = express.Router();

// @route  'apis/profile/test'
// @desc   tests profile routes
// @access public
router.get("/test", (req, res) => {
  res.json({
    msg: "profile works"
  });
});

module.exports = router;
