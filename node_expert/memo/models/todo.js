const mongooes = require("mongoose");


const TodoSchema = new mongooes.Schema({
    value: String,
    doneAt: Date,
    order: Number
});


TodoSchema.virtual("todoId").get(function(){
    return this._id.toHexString();
});

TodoSchema.set('toJSON',{
    virtuals: true,
})

module.exports = mongooes.model("Todo", TodoSchema);