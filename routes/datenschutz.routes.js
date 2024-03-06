const express = require('express');

const datenschutzController = require('../controllers/datenschutz.controller');

const router = express.Router();

router.get('/datenschutz', datenschutzController.getDatenschutz);

module.exports = router;
