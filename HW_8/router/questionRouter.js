const express = require('express');
const router = express.Router();
// const Controller = require('./Controller');
const questionController = require('../controllers/questionController');


router.get('/',(req,res) => {
    //let data = [...Controller.readFileSync('data.json')];
    questionController.queryData((err,data)=>{
        if(err) console.log(err);
        else{
            if(data.length==0){
                res.redirect('/empty');
            }
            else{
                let random = Math.floor(Math.random()*(data.length));
                let id = data[random]._id;
                res.render('home', {
                    questionContent:{
                        content :  data[random].question,
                        id : id
                    },
                    askRouter:'',
                    questionRouter: 'active'
                });
            }
        }
    });
});

router.get('/info/:id',(req,res)=>{
    let id = req.params.id;
    // let data = [...Controller.readFileSync('data.json')];
    questionController.findById(id,(err,data)=>{
        if(err) console.log(err)
        else{
            if(data.yes==data.no){
                res.render('questionInfo',{
                    questionInfo:{
                        content: data.question,
                        sum: data.yes + data.no,
                        yes: 50,
                        no: 50
                    },
                    askRouter:'',
                    questionRouter: 'active'
                })
            }
            else{
                res.render('questionInfo',{
                    questionInfo:{
                        content: data.question,
                        sum: data.yes + data.no,
                        yes: ((data.yes*100)/(data.yes + data.no)).toFixed(2), //toFixed(2)
                        no:  ((data.no*100)/(data.yes + data.no)).toFixed(2)   
                    },
                    askRouter:'',
                    questionRouter: 'active'
                })
            }
        }
    });
});

router.post('/',(req,res) => {
    questionController.queryData((err,data)=>{
        if(err) console.log(err);
        else{
            if(data.length==0){
                res.redirect('/empty');
            }
            else{
                let random = Math.floor(Math.random()*(data.length));
                let id = data[random]._id;
                // res.render('home', {
                //     // questionContent:{
                //     //     content :  data[random].question,
                //     //     id : id
                //     // },
                //     askRouter:'',
                //     questionRouter: 'active'
                // });
                let content = data[random];
                res.json({content});
            }
        }
    });
});

router.get('/empty',(req,res)=>{
    res.render('empty');
})



module.exports = router;