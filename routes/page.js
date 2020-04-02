const express = require('express'),
    router = express.Router();

/**
 * Index
 */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'KILROY',
        brief: 'NodeJS Server'
    });
});

module.exports = router;
