const express = require('express');
const router = express.Router();

const {list, create, remove, photo, blogId} = require('../controllers/BlogController');

router.get('/list/', list);
router.post('/create/', create);
router.delete('/:blogId', remove);

/* MULTIMEDIA */
router.get('/photo/:blogId', photo);

router.param('blogId', blogId);

module.exports = router;