var express = require('express');
var router = express.Router();
var Data = require('../models/Data.js');
/* GET Datas listing. */

/* GET /datas 行程列表 */
router.get('/', function(req, res, next) {
  Data.find(function (err, datas) {
    if (err) return next(err);
    res.json(datas);
  });
});

/* POST /datas 單筆新增行程 */
router.post('/', function(req, res, next) {
  Data.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /datas/id 單筆檢視行程 */
router.get('/:id', function(req, res, next) {
  Data.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /datas/:id 單筆修改行程 */
router.put('/:id', function(req, res, next) {
  Data.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id 單筆刪除行程 */
router.delete('/:id', function(req, res, next) {
  Data.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
 

module.exports = router;
