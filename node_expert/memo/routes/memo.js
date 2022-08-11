var express = require('express');
var router = express.Router();
const { response_dtoJson } = require("../utils/response_dto");

const {testCtrl} = require('../controllers/test');



router.get('/', function (req, res, next) {
    let result =  testCtrl(req.query);
    console.log("heelo")
    response_dtoJson(null, null, result, res);
});


module.exports = router