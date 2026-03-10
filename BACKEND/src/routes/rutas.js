const express = require("express");
const router = express.Router();

router.get("/ola", (req, res) => {
  res.send("<h1>ola</h1>");
});

module.exports = router;