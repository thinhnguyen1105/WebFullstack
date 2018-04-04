const express = require('express');
const router = express.Router();
const fileController = require('./fileController');

const questionController = require("../controller/questionController");



router.get('/ask', (req, res) => {
    res.render('ask',
    {
        ask:"active",
        question:""
    });
})



router.post('/ask', (req, res) => {
    // // clone mảng hoặc object thành 1 cái mới 
    // let data = [...fileController.readFileSync('./data.json')];
    // let id = data.length + 1;
    
    // let newQuestion = {
    //     id: id,
    //     question: req.body.question,
    //     yes: 0,
    //     no:0
    // };
    // data.push(newQuestion);

    // fileController.writeFile('./data.json', data, (err) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     res.redirect('/question/' + id);
    // })

    try{
        questionController.create(req.body.question,(data)=>{
            res.redirect('/question/' + data._id);
        });
    }
    catch(ex){
        console.log(ex);
    }
})

module.exports = router;