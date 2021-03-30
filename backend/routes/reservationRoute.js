const express = require('express');
const router = express.Router();

const {list,create,remove,reservationById} = require("../controllers/ReservationController");

router.get("/list", list);
router.post("/create", create);
router.delete("/:reservationById", remove);

router.param("reservationById", reservationById);

module.exports = router;