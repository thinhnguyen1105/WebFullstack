const express = require('express');
const router = express.Router();
const questionController = require('../controller/questionController');

router.get('/question/:id/', (req, res) => {
    // try {
    //     let data = [...fileController.readFileSync('./data.json')]
    //     let question = data[req.params.id -1];
    //     console.log(question);
    //     questionCt = question.question; 
    //     yes = question.yes;
    //     no = question.no;
        
    //     res.render('question', {
    //         question:{
    //             content: questionCt,
    //             yes: yes,
    //             no: no

    //         } 
    //     })
    
    // }
    // catch (ex) {
    //     console.log(ex);

    // }

    let ID = req.params.id -1;
    questionController.findByid(ID,(data)=>{
        res.render('question',{
            question:{
                content: data.question,
                id: ID,
                yes: data.yes,
                no: data.no
            }
        })
    })
    
});

router.get('/question/info/:id/', (req, res) => {

    let ID = req.params.id ;
    questionController.findByid(ID,(data)=>{
        res.render('question',{
            question:{
                content: data.questionContent,
                id: ID,
                yes: data.yes,
                no: data.no
            }
        })
    })
})




module.exports = router;