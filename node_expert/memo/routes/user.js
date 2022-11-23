var express = require('express');
var router = express.Router();
const { responseDtoJson } = require("../utils/response_dto");

const {
    getAllUser,
    register,
    login,
    authCheck
} = require("../controllers/user")

// 모든 유저 조회
router.get('/', async (req, res, next) => {
    let result = await getAllUser();
    responseDtoJson(null, null, result, res);
})

// 회원가입
router.post('/', async (req, res, next) => {
    let result = await register(req.body);
    if (result.code) {
        responseDtoJson(result, result.code, null, res);
    } else {
        responseDtoJson(null, null, result, res);
    }
});


// 로그인
router.post('/login', async (req, res, next) => {
    let result = await login(req.body);
    if (result.code) {
        responseDtoJson(result, result.code, null, res);
    } else {
        responseDtoJson(null, null, result, res);
    }
});


// 토큰 검증
router.get('/authCheck', async (req, res, next) => {
    let result = await authCheck(req.headers);
    if (result.code) {
        responseDtoJson(result, result.code, null, res);
    } else {
        responseDtoJson(null, null, result, res);
    }
});

module.exports = router