var express = require('express');
var router = express.Router();
const { responseDtoJson } = require("../utils/response_dto");

const { testCtrl, postTodo, getTodo } = require('../controllers/memo');



router.get('/', async (req, res, next) => {
    let result = await getTodo();
    responseDtoJson(null, null, result, res);
});


router.post('/', async (req, res, next) => {
    let result = await postTodo(req.body);

    if (result == true) {
        responseDtoJson(null, null, 'Success', res);
    } else {
        responseDtoJson(result, result.code, null, res);
    }
});



module.exports = router