var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Rate = require('../models/Rate');

/* GET /rates 匯率列表 */
router.get('/', function(req, res, next) {
  Rate.find(function (err, rates) {
    if (err) return next(err);
    res.json(rates);
  });
});

/* POST /rates 單筆新增匯率 */
router.post('/', function(req, res, next) {
  Rate.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /rates 取得匯率 */
router.get('/:datestr', function(req, res, next) {
  Rate.find({'createdate':req.params.datestr}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;