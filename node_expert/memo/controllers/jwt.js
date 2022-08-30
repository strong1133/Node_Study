const jwt = require("jsonwebtoken");

const Secret = require("../config/secret.json");


const sign = async (user) =>{
    const payLoad = {
        idx: user._id,
        id: user.id,
        name: user.name
    };

    const token = jwt.sign(payLoad, Secret['secretKey'],Secret['jwtOption'] )

    return token;
}

module.exports = {
    sign
}