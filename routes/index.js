var express = require('express');
var router = express.Router();
var User = require('../models/User.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function (req, res) {
  var userName = req.body.userName;
  var password = req.body.password;

  User.findOne({ userName: userName, password: password }, function (err, user) {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }

    if (!user) {
      return res.status(404).send();
    }
    return res.json(  {  userName:  user.userName,
                                           nickName: user.nickName,
                                           email: user.email,
                                           introduce: user.introduce });
          
           
  })
      
})
module.exports = router;
