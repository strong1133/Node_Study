const express = require('express');
const router = express.Router();
const { responseDtoJson } = require("../../utils/response_dto");

const authService = require("../../service/auth/auth_service")


router.post('/login', async (req, res, next) => {
    let result = await authService.login(req.body);
    responseDtoJson(null, null, result, res);
});

router.get('/me', async (req, res, next) => {
    let result = await authService.me(req.headers);
    responseDtoJson(null, null, result, res);
});



module.exports = router 