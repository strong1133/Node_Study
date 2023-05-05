const ErrorDto = require("../utils/error_dto")
const { ErrorType } = require("../model/enum/common/error_type")


const interceptor = (req, res) => {
    let filterRes = true;
    let reqApiUri = req.originalUrl;
    let method = req.method
    console.log(`[${method}] ::: ${reqApiUri}`);

    /// 토큰 검사
    // filterRes = tokenValid(req, res)

    return filterRes
}


const tokenValid = (req, res) => {  

    let authorization = req.get('authorization');

    if (authorization) {
        let token = authorization.replace("Bearer ", "");

    } else {
        return ErrorDto.throwError("허용되지 않은 요청입니다.", ErrorType.PERMISSION_DENY);
    }

    return true;
}



module.exports = interceptor;