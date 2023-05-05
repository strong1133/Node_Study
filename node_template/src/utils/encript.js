const Crypto = require('crypto-js')

const key = 'asdasdasd'


const encrypt = (data) => {
    let hash = Crypto.AES.encrypt(data.toString(), key).toString();
    let uff8Str= Crypto.enc.Utf8.parse(hash);
    let base64Encoded = Crypto.enc.Base64.stringify(uff8Str);
    return base64Encoded;
}

const decrypt = (data) => {
    let uff8Str = Crypto.enc.Base64.parse(data).toString(Crypto.enc.Utf8);
    let decodedStr = Crypto.AES.decrypt(uff8Str,key);
    let rawStr = decodedStr.toString(Crypto.enc.Utf8);
    return rawStr;
}


module.exports = {
    encrypt,
    decrypt
}