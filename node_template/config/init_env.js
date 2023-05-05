const path = require("path");
const dotenv = require("dotenv");
const { log } = require("console");

const initEnv = () => {

    let curProfile = "LOCAL";

    if (process.env.NODE_ENV) {
        curProfile = process.env.NODE_ENV.toUpperCase();
    }

    switch (curProfile) {
        case 'LOCAL':
            log("PROFILE :: LOCAL")
            dotenv.config({ path: path.join(__dirname, 'env/local.env') })
            break;
        case 'DEV':
            log("PROFILE :: DEV")
            dotenv.config({ path: path.join(__dirname, 'env/dev.env') })
            break;
        case 'PROD':
            log("PROFILE :: PROD")
            dotenv.config({ path: path.join(__dirname, 'env/prod.env') })
            break;

        default:
            dotenv.config({ path: path.join(__dirname, 'env/local.env') })
            break;
    }
}

module.exports = {
    initEnv: initEnv
}