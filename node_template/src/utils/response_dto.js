
const timeStamp = require("./time_stamp");

const responseBody = (err, value, code) => {
    let bodyJson = {
        "timeStamp": timeStamp.makeCurStamp(),
        "statusCode": code,
        "errFlag": err ? true : false,
        "errMsg": err ? err.message : null,
        "data": value,
    };
    return bodyJson;
};

const responseDtoJson = (err, errCode, value, res) => {
    if (err || value instanceof Error) {
        if (err == null) {
            err = value;
        }
        let code = errCode ? errCode : err.code ? err.code : 500
        return res.status(code).json(responseBody(err, {}, code));
    } else {
        if (!value || value.length == 0) {
            console.error("ERR :: No Such Data");
            return res.status(404).json(responseBody(err, "No Such Data", 404));
        } else {
            return res.status(200).json(responseBody(err, value, 200));
        }
    }
};



module.exports = {
    responseBody,
    responseDtoJson
};