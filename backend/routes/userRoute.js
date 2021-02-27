const express = require('express');
const router = express.Router();

const { list, create } = require("../controllers/userController");

router.get("/list", list);
router.post("/create", create);

module.exports = router;