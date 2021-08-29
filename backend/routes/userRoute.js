const express = require('express');
const router = express.Router();

const { create, byEmail, editUser } = require("../controllers/userController");

router.get("/:byEmail", byEmail);
router.post("/create", create);
router.put("/edit", editUser);

module.exports = router;