const express = require("express");
const router = express.Router();
const controller = require('../controller/controller');

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get('/registros', controller.getAllRegistros);
// router.post('/', userController.createUser);

module.exports = router;