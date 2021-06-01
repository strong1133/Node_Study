const express = require('express');
const app = express();
const port = 3000;



const goodsRouter = require('./routes/goods');
app.use('/goods', goodsRouter);

app.use('/', (res, req) => {
    req.send('<h1>asd</h1>')
})

app.listen(port, () => {
    console.log(`port by http://localhost:${port}`)
})