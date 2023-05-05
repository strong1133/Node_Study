
const { ErrorType } = require("../model/enum/common/error_type")


const ErrorDto = {

    throwError: (msg, type) => {
        let _msg = msg;
        if (!_msg) {
            _msg = getMsg(type)
        }

        let _err = Error(_msg)
        _err.code = getCode(type)

        return _err;
    }

}

const getCode = (type) => {
    let code = 400;
    switch (type) {
        case ErrorType.NOT_FOUND:
            code = 404;
            break;
        case ErrorType.PERMISSION_DENY:
            code = 401;
            break;
        case ErrorType.INTERNAL_SERVER_ERROR:
            code = 500;
            break;
        case ErrorType.BAD_REQUEST:
            code = 400;
            break;
    }
    return code;
};

const getMsg = (type) => {
    let msg = '';
    switch (type) {
        case ErrorType.NOT_FOUND:
            msg = '데이터가 없습니다.'
            break;
        case ErrorType.PERMISSION_DENY:
            msg = '인증정보가 올바르지 않습니다.';
            break;
        case ErrorType.INTERNAL_SERVER_ERROR:
            msg = '서버 오류';
            break;
        case ErrorType.BAD_REQUEST:
            msg = '잘못된 요청입니다.';
            break;
    }
    return msg;
};


module.exports = ErrorDto