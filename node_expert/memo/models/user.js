const mongooes = require("mongoose");


const UserSchema = new mongooes.Schema({
    id: String,
    password: String,
    name: String,
    social: String,
    doneAt: Date,
    order: Number
});


UserSchema.virtual("userId").get(function(){
    return this._id.toHexString();
});

UserSchema.set('toJSON',{
    virtuals: true,
})

module.exports = mongooes.model("User", UserSchema);