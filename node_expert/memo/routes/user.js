var express = require('express');
var router = express.Router();
const { responseDtoJson } = require("../utils/response_dto");

const { getAllUser, register } = require("../controllers/user")

// 모든 유저 조회
router.get('/', async (req, res, next) => {
    let result = await getAllUser();

    responseDtoJson(null, null, result, res);
})

// 회원가입
router.post('/', async (req, res, next) => {

    let result = await register(req.body);

    responseDtoJson(null, null, result, res);
});


module.exports = router