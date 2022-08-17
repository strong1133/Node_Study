
const Todo = require("../models/todo");

const testCtrl = (req) => {
    console.log(req);

    return 'testCtrl Return';
}

//
// Post Todo
const postTodo = async (req) => {
    console.log(req);
    try {
        const { value } = req;
        
        if(!value){
            console.log("요청 값 부족");
            let err = new Error('요청 값이 잘못되었습니다.')
            err.code = 400;
            return err;
        }

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

//
// Get Todos
const getTodo = async (req) =>{

    let todos;

    console.log(req);
    if(req){
        todos= await Todo.findById({'_id': req['id']});
    }else{
        todos= await Todo.find().sort("-order").exec();
    }
  
    return todos;
}

module.exports = {
    testCtrl, postTodo, getTodo
}