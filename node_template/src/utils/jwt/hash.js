const bcrypt = require('bcrypt');

const Secret = require("../../../config/secret.json");

const hasher = (str) => {
    var hash = bcrypt.hashSync(str, Secret['salt']);
    return hash.toString();
}

const matcher = (password, encodedPassword) => {
    let flag = bcrypt.compareSync(password, encodedPassword);
    return flag;
}

module.exports = {
    hasher,
    matcher
}






