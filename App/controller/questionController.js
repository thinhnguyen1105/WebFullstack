const QuestionSchema = require("../models/questionSchema");

let create = (question,callback)=>{
    let newQuestion = {
        questionContent : question
    }
    QuestionSchema.create(newQuestion,(err, data)=>{
        if(err)console.log(err);
        callback(data);
    });
};

let queryData = (callback)=>{
    QuestionSchema.find((err,data)=>{
        if(err)console.log(err);
        callback(data);
    })
}

let findByid = (id,callback) =>{
    QuestionSchema.findById(id,(err,data)=>{
        if(err) console.log(err);
        callback(data);
    }) 
}



module.exports = {
    create,
    queryData,
    findByid
}