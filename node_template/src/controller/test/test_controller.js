const express = require('express');
const router = express.Router();
const { responseDtoJson } = require("../../utils/response_dto");

const testService = require("../../service/test/test_service")


router.get('/', function (req, res, next) {
    let result = testService.getTest(req);
    responseDtoJson(null, null, result, res);
});



module.exports = router