const express = require('express');
const router = express.Router();

const {list, create, remove, photo, brandId} = require('../controllers/BrandController');

router.get('/list/', list);
router.post('/create/', create);
router.delete('/:brandId', remove);

/* MULTIMEDIA */
router.get('/photo/:brandId', photo);

router.param('brandId', brandId);

module.exports = router;