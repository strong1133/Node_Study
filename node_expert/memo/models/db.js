
const db_config = require("../config/db_config.json");

const conn = () => {

    let id = db_config['db']['id']
    let pwd = db_config['db']['pwd']

    // console.log(id, pwd);

    const mongoose = require('mongoose');
    const uri = `mongodb+srv://${id}:${pwd}@freedb.kce9t.mongodb.net/?retryWrites=true&w=majority`;
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    
    db.once("open",open );
    db.on("error", console.error.bind(console, "connection error:"));

  

    return db;
}

const open=()=>{
    console.log("DB CONNECTED");
}

module.exports = conn;