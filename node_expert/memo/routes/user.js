var express = require('express');
var router = express.Router();
const { responseDtoJson } = require("../utils/response_dto");

const { register } = require("../controllers/user")


router.post('/', async (req, res, next) => {

    let result = await register(req.body);

    responseDtoJson(null, null, result, res);
});


module.exports = router