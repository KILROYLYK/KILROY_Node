const express = require('express'),
    router = express.Router();

const midUser = require('../middleware/user');

// Index
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'KILROY',
        brief: 'NodeJS Server'
    });
});

// 用户管理
router.get('/user', midUser.getUser);

module.exports = router;
