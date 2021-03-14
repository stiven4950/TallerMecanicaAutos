const express = require('express');
const router = express.Router();

const {list, create, remove, photo, photoDetail,findName, serviceId} = require('../controllers/serviceController');

router.get('/list/', list);
router.post('/create/', create);
router.delete('/:serviceId', remove);

/*router.get('/:serviceId', findById);*/
router.get('/:serviceName', findName);

/* MULTIMEDIA */
router.get('/photo/:serviceId', photo);
router.get('/photoDetail/:serviceId', photoDetail);


router.param('serviceId', serviceId);

module.exports = router;