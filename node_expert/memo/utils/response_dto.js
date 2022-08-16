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

module.exports = {
    responseBody:responseBody,
    responseDtoJson: (err, errCode, value, res) => {
        if (err) {
            console.error("ERR :: ", err.message);
            
            return res.status(errCode? errCode: 500).json(responseBody(err, value, errCode? errCode: 500));
        } else {
            if (!value) {
                console.error("ERR :: No Such Data");
                return res.status(404).json(responseBody(err, "No Such Data", 404));
            } else {
                return res.status(200).json(responseBody(err, value, 200));
            }
        }
    },
};