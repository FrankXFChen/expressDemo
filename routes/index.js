var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  if (req.session.user) {
    res.render('home');
  } else {
    req.session.error = "Please login first.";
    res.redirect('/');
  }
});

router.post('/login', function(req, res, next) {
  var userName = req.body.userName;
  var passWord = req.body.passWord;
  var user={
    userName:userName,
    passWord:passWord
  }
  var data={flag:false};
  var code=404;
  if(userName=='baobaomi'&&passWord=='admin01'){
    res.send({userId:1, message:'ok', code:200});
  }
  else if(userName=='admin' && passWord=='123456'){
    req.session.user = user
    data.flag= true;
    code = 200;
    //res.send(200);
    res.send({data:data, code:code});
  }else{
    req.session.error = "User Name or password is not correct.";
    res.redirect('/');
    res.send(404);
  }
  //res.render('home', { title: 'Express' });
});

router.get('/logout', function (req, res, next) {
  req.session.user = null;
  req.session.error = null;
  res.redirect('/');
})

module.exports = router;