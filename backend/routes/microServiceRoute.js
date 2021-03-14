const express = require('express');
const router = express.Router();

const {list, create, remove, findName, photoMobile, photoDesktop, microServiceId} = require('../controllers/MicroServiceController');

router.get('/list/', list);
router.post('/create/', create);
router.delete('/:microServiceId', remove);

/*router.get('/:serviceId', findById);*/
router.get('/:serviceName', findName);

/* MULTIMEDIA */
router.get('/photoMobile/:microServiceId', photoMobile);
router.get('/photoDesktop/:microServiceId', photoDesktop);


router.param('microServiceId', microServiceId);

module.exports = router;