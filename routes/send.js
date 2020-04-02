const express = require('express'),
    router = express.Router();

/**
 * Index
 */
router.get('/', function (req, res, next) {
    res.send('11111111111');
});

module.exports = router;
