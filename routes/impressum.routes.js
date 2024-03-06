const express = require('express');

const impressumController = require('../controllers/impressum.controller');

const router = express.Router();

router.get('/impressum', impressumController.getImpressum);

module.exports = router;