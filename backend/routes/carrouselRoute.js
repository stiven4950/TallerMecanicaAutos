const express = require('express');
const router = express.Router();

const {list, create, remove, photoMobile, photoDesktop, carrouselId} = require('../controllers/CarrouselController');

router.get('/list/', list);
router.post('/create/', create);
router.delete('/:carrouselId', remove);

/* MULTIMEDIA */
router.get('/photoMobile/:carrouselId', photoMobile);
router.get('/photoDesktop/:carrouselId', photoDesktop);


router.param('carrouselId', carrouselId);

module.exports = router;