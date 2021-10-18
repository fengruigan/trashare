var express = require("express");
var router = express.Router();

// create new users
router.post("/", (req, res) => {
  res.send(`registering user: ${JSON.stringify(req.body)}`);
});

// get user (login)
router.post("/login", (req, res) => {
  res.send(`Logging in user: ${JSON.stringify(req.body)}`);
});

module.exports = router;
