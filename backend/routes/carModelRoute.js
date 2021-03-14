const express = require('express');
const router = express.Router();

const { list, create, findByBrand } = require("../controllers/CarModelController");

router.get("/list", list);
router.get("/:findByBrand", findByBrand);

router.post("/create", create);

module.exports = router;