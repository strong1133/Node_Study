
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const path = require('path')
const db = require("./models/index.js")
const indexRouter = require('./routes/index')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


db.sequelize.sync().then(()=>{
    console.log("DB 연결 성공");
}).catch(err =>{
    console.log("DB 연결 실패");
    console.log(err);
})





app.listen(port, ()=> console.log(`지금 서버 포트는 ${port}`));