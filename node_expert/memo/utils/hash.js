const SHA256 = require("crypto-js/sha256");
const Secret = require("../config/secret.json");


const hasher = (str) => {
    var hash = SHA256(str + Secret['secretKey']);
    return hash.toString();
}

module.exports = {
    hasher
}