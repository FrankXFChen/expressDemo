var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getTodoList', function(req, res, next) {
    var data = [
        {
            name:'Review user apply', 
            count:5,
            key:"review"
        },{
            name:'Confirm user feedback', 
            count:10,
            key:'confirm'
        },{
            name:'Others', 
            count:3,
            key:'other'
        }
    ]
  res.send({data:data});
});

module.exports = router;