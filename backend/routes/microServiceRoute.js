const express = require('express');
const router = express.Router();

const {list, create, remove, findName, findById, photoMobile, photoDesktop, microServiceId, icon} = require('../controllers/MicroServiceController');

router.get('/list/', list);
router.post('/create/', create);
router.delete('/:microServiceId', remove);

router.get('/id/:microServiceId', findById);
router.get('/:serviceName', findName);

/* MULTIMEDIA */
router.get('/photoMobile/:microServiceId', photoMobile);
router.get('/photoDesktop/:microServiceId', photoDesktop);
router.get('/icon/:microServiceId', icon);


router.param('microServiceId', microServiceId);

module.exports = router;