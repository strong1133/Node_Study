const User = require("../models/user")

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

module.exports = {
    getAllUser,
    register
}