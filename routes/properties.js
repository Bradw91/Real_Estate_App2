const express = require('express');
const router = express.Router();
const {getProperties, addProperty, deleteProperty} = require('../controllers/properties')

router.route('/')
    .get(getProperties)
    .post(addProperty);

router.route('/:id')
    .delete(deleteProperty);

module.exports = router;