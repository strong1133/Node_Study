// Improt
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const { responseBody } = require("./utils/response_dto");


//선언부
const PORT = 8080;
const app = express();
const router = express.Router();


// Middle Ware
app.use(logger("dev"));
app.use(express.json());
app.use(express.static("./assets"));


// Express Route Import
const memo = require("./routes/memo");


// Express Route Path
app.use("/memo", memo);


// 404 Error
app.use((req, res, next) => {
    let err = new Error;
    err.message = 'Page Not Found'
    res.status(404).json(responseBody(err, "Page Not Found", 404)).end();

});


// Server Init
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})