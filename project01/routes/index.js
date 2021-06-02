const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/board', function(req, res, next){
    res.render('show');
});

router.post('/board', function (req, res, next) {
    console.log("req : "+ req.body.title)
    models.post.create({
        
        title: req.body.title,
        author: req.body.author
    }).then(result => {
        console.log("성공")
        res.redirect("/board")
    })
    .catch(err=>{
        console.log("실페")
    })
})

module.exports = router;