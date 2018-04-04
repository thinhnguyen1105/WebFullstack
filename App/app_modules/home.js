const express = require('express');
const router = express.Router();
const questionController = require('../controller/questionController');



router.get('/', (req, res) => {
    // try {
    //     let data = [...fileController.readFileSync('./data.json')];
    //     if(data.length == 0){
    //         res.redirect('/error');
    //     }
    //     else{

    //         let randomId = Math.floor((Math.random() * data.length) + 0);
    //          questionCt = data[randomId].question;
    //          yes = data[randomId].yes;
    //          no = data[randomId].no;
    //          ID = randomId; 

    //         res.render('home', {
    //             question: {
    //                 questionContent: questionCt,
    //                 yes: yes,
    //                 no: no,
    //                 id: ID
    //             },
    //             askRouter:'',
    //             questionRouter: 'active'
            
    //         })
    //     }

   
    // }
    // catch (ex) {
    //     console.log(ex);
    // }

    questionController.queryData((data)=>{
        if(data.length==0){
            res.redirect('/error');

        }
        else{
            let random = Math.floor((Math.random() * data.length) + 0);
            let ID = data[random]._id;
            res.render('home',{
                question:{
                    questionContent: data[random].questionContent,
                    id: ID ,
                    yes: data[random].yes,
                    no: data[random].no
                },
                ask:'',
                question:'active'
            })
        }
    })

router.get('/error',(req,res)=>{
    res.render('error');
})



})

module.exports = router;
