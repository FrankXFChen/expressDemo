var express = require('express');
var router = express.Router();
var homePageService = require('../src/service/homePageService')

/* GET users listing. */
router.get('/getTodoList', function(req, res, next) {
    // var data = [
    //     {
    //         name:'Review user apply', 
    //         count:5,
    //         key:"review"
    //     },{
    //         name:'Confirm user feedback', 
    //         count:10,
    //         key:'confirm'
    //     },{
    //         name:'Others', 
    //         count:3,
    //         key:'other'
    //     }
    // ]
    var params = {id:1};
    homePageService.getToDoList(params,(err, result)=>{
        res.send({data:result});
    })
  //res.send({data:data});
});

module.exports = router;