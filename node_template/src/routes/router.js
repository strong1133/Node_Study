const express = require('express');
const router = express.Router();

const interceptor = require("./interceptor");
const { responseDtoJson } = require("../utils/response_dto");

// Route Import
const testController = require("../controller/test_controller");

const BASE = "/api"


///
/// Global Interceptor
router.use((req, res, next) => {
    let filterRes = interceptor(req, res)
    if (filterRes instanceof Error) {
        console.log("에러발생")
        return responseDtoJson(null, null, filterRes, res); // 요청 종료
    }
    next();
});


// Routing
router.use("/test", testController)


module.exports = router;