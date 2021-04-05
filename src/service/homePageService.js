var todoListDao = require('../dao/todoListDao');

module.exports.getToDoList=function(params, callback){
    todoListDao.getToDoList(params, function(err, result){
        callback(err, result);
    })
}