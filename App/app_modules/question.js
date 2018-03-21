const express = require('express');
const router = express.Router();
const fileController = require('./fileController');



router.get('/question/:id/', (req, res) => {
    try {
        let data = [...fileController.readFileSync('./data.json')]
        let question = data[req.params.id -1];
        console.log(question);
        questionCt = question.question; 
        yes = question.yes;
        no = question.no;
        
        res.render('question', {
            question:{
                content: questionCt,
                yes: yes,
                no: no

            } 
        })
    
    }
    catch (ex) {
        console.log(ex);

    }

    
})

router.get('/question/info/:id/', (req, res) => {
    try {
        let data = [...fileController.readFileSync('./data.json')]
        let question = data[req.params.id];
        console.log(question);
        questionCt = question.question; 
        yes = question.yes;
        no = question.no;
        
        res.render('question', {
            question:{
                content: questionCt,
                yes: yes,
                no: no

            } 
        })
    
    }
    catch (ex) {
        console.log(ex);

    }

    
})




module.exports = router;