const jwt = require("jsonwebtoken");
const Secret = require("../../../config/secret.json");


const sign = async (user) => {
    const payLoad = {
        idx: user['ID'],
        id: user['EMAIL'],
        name: user['NAME']
    };

    const token = jwt.sign(payLoad, Secret['secretKey'], Secret['jwtOption'])

    return token;
}

const verify = async (token) => {
    let ressult;
    token = token.replaceAll('Bearer ', '');
    try {
        ressult = jwt.verify(token, Secret['secretKey']);

    } catch (err) {
        if (err.message === 'jwt expired') {
            console.log('expired token');
            ressult = Error("만료된 토큰입니다.")
            ressult.code = 403;
        } else {
            ressult = Error("잘못된 토큰입니다.")
            ressult.code = 403;
        }
    }

    return ressult;
}

module.exports = {
    sign, verify
}