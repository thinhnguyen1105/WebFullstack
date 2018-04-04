const express = require('express');
const router = express.Router();
// const Controller = require('./Controller');
const questionController = require('../controllers/questionController');

router.get('/', (req,res)=>{
    res.render('ask',{
        askRouter:'active',
        questionRouter: ''
    });
});

// router.post('/', (req,res)=>{
//     let data = [...Controller.readFileSync('./data.json')];
//     let Id = data.length;
//     let newQuestion = {
//         id: data.length,
//         question: req.body.question,
//         yes : 0,
//         no : 0
//     }
//     data.push(newQuestion);
//     console.log(JSON.stringify(data));
//     Controller.writeFile('./data.json',data,(err)=>{
//         if(err) throw err;
//         res.redirect('/question/info/' + Id);
//     })
// });

router.post('/',(req,res)=>{
    try {
        questionController.create(req.body.question,(err,data)=>{
            if(err) console.log(err);
            else res.redirect('/question/info/' + data._id);
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;