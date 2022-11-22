
const User = require("../models/user")
const { sign, verify } = require("../utils/jwt");
const { hasher } = require("../utils/hash");


const getAllUser = async () => {

    try {
        let users = await User.find().sort("-order").exec();
        return users;
    } catch (e) {
        return 'fail'
    }
}


const register = async (req) => {

    try {

        console.log(req);

        let rawPwd = req['password'];
        let hashed = hasher(rawPwd);

        req['password'] = hashed;

        const maxOrderByUserId = await User.findOne().sort("-order").exec();
        const order = maxOrderByUserId ? maxOrderByUserId.order + 1 : 1;
        req.order = order;

        const user = new User(req)

        // console.log(user)
        await user.save();

        return 'success'
    } catch (e) {
        return 'fail'
    }
}

const login = async (req) => {
    let id = req['id'];
    let rawPwd = req['password'];

    let hasedPwd = hasher(rawPwd);

    let token;
    const user = await User.findOne({ "id": id, "password": hasedPwd });

    console.log(user);

    if (user) {
        token = await sign(user);

        console.log(token);

    } else {
        let err = Error("로그인 정보가 잘못되었습니다.");
        err.code = 403;
        return err
    }

    return { token: token };
}

const authCheck = async (req) => {
    let token = req['token']
    return await verify(token);
}

module.exports = {
    getAllUser,
    register,
    login,
    authCheck
}