const express = require('express');
const router = express.Router();
const controller = require('./controller');
const { requireAdmin } = require('./../users/util');

router.route('/').get(controller.getExoplanets);
router.route('/:id').get(controller.getExoplanet);
router.route('/').post(requireAdmin, controller.postExoplanet);
router.route('/:id').delete(requireAdmin, controller.deleteExoplanet);

module.exports = router;
