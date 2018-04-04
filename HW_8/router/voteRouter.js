const express = require('express');
const router = express.Router();
// const Controller = require('./Controller');
const questionController = require('../controllers/questionController');

// router.get('/:id/:bool',(req,res)=>{
//     // let data = [...Controller.readFileSync('data.json')];
//     let Id = req.params.id;
//     let bool = req.params.bool;
//     if(bool === 'yes')  data[Id].yes++;
//     else data[Id].no++;
//     Controller.writeFile('./data.json',data,(err) =>{
//         if(err) throw err;
//         res.redirect('/question/info/' + Id);
//     }
//     )
// })

router.get('/:id/:bool',(req,res)=>{
    let id = req.params.id;
    let bool = req.params.bool;
    questionController.vote(bool,id,(err)=>{
        if(err) console.log(err);
        else res.redirect('/question/info/' + id);
    })
})

module.exports = router;