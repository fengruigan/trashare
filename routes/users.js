var express = require("express");
var router = express.Router();

// create new users
router.post("/", (req, res) => {
  res.send(`registering user: ${JSON.stringify(req.query)}`);
});

// get user (login)
router.get("/:id", (req, res) => {
  res.send(`Logging in user with id: ${req.params.id}`);
});

module.exports = router;
