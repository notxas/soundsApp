const express = require('express');
const router = express.Router();
const controller = require('./controller');

const checkSession = (req, res, next) => {
  if (req.session.user && req.session.isAuthenticated) {
    next();
  } else {
    res.status(403).json({ message: 'Permission denied!' });
  }
};

router.route('/').post(controller.postAuthenticate);

module.exports = router;
