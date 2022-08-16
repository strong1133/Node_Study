var express = require('express');
var router = express.Router();
const { responseDtoJson } = require("../utils/response_dto");

const {testCtrl, postTodo} = require('../controllers/memo');



router.get('/', function (req, res, next) {
    let result =  testCtrl(req.query);
    console.log("heelo")
    responseDtoJson(null, null, result, res);
});


router.post('/', function (req, res, next) {
    let result =  postTodo(req.body);
    
    if(result){
        responseDtoJson(null, null, 'Success', res);
    }else{
        responseDtoJson(null, 500, 'Fail', res);
    }
    
});

module.exports = router