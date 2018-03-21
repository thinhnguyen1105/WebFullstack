const express = require('express');
const router = express.Router();
const fileController = require('./fileController');



router.get('/', (req, res) => {
    try {
        let data = [...fileController.readFileSync('./data.json')];
        if(data.length == 0){
            res.redirect('/error');
        }
        else{

            let randomId = Math.floor((Math.random() * data.length) + 0);
             questionCt = data[randomId].question;
             yes = data[randomId].yes;
             no = data[randomId].no;
             ID = randomId; 

            res.render('home', {
                question: {
                    questionContent: questionCt,
                    yes: yes,
                    no: no,
                    id: ID
                }
            })
        }

   
    }
    catch (ex) {
        console.log(ex);
    }

router.get('/error',(req,res)=>{
    res.render('error');
})



})

module.exports = router;
