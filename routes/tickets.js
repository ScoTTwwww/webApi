var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Ticket = require('../models/Ticket.js');

/* GET /tickets 行程列表 */
router.get('/', function(req, res, next) {
  Ticket.find(function (err, tickets) {
    if (err) return next(err);
    res.json(tickets);
  });
});

/* POST /tickets 單筆新增行程 */
router.post('/', function(req, res, next) {
  Ticket.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /tickets/id 單筆檢視行程 */
router.get('/:id', function(req, res, next) {
  Ticket.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /tickets/:id 單筆修改行程 */
router.put('/:id', function(req, res, next) {
  Ticket.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /tickets/:id 單筆刪除行程 */
router.delete('/:id', function(req, res, next) {
  Ticket.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;