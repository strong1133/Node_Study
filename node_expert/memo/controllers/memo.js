
const Todo = require("../models/todo");

const testCtrl = (req) => {
    console.log(req);

    return 'testCtrl Return';
}

const postTodo = async (req) => {
    console.log(req);
    try {
        const { value } = req;

        const maxOrderByUserId = await Todo.findOne().sort("-order").exec();
        const order = maxOrderByUserId ? maxOrderByUserId.order + 1 : 1;

        const todo = new Todo({ value, order });

        console.log(todo);
        await todo.save();

        console.log(maxOrderByUserId);

        return true;
    } catch (e) {
        return false;
    }

}

module.exports = {
    testCtrl, postTodo
}