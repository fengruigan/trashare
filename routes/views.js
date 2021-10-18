const express = require("express");
const router = express.Router();
const path = require("path");

/* GET home page. */
router.get("/register", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/registration.html"));
});

module.exports = router;
