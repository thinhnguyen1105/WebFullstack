const questionSchema = require('../models/questionSchema');

let create = (question,callback)=>{
    let newQuestion = {
        question: question,
    }
    questionSchema.create(newQuestion,(err,data)=>{
        callback(err,data);
    });
};

let queryData = (callback) =>{
    questionSchema.find((err,data)=>{
        callback(err,data);
    })
}

let findById = (id,callback) =>{
    questionSchema.findById(id,(err,data)=>{
        callback(err,data);
    })
}

let findRandom = (callback) =>{
    try{
        questionSchema.count().exec((err,length)=>{
            if(err) callback(err);
            else{
                questionSchema.findOne().skip(Math.floor(Math.random*length)).exec((errRandom,data)=>{
                    callback(errRandom,data);
                })
            }
        })
    }catch(ex){
        console.log("Exeption: "+ ex);
    }
}

let vote = (bool,id,callback)=>{
    if(bool === 'yes'){
        findById(id,(err,data)=>{
            if(err) callback(err);
            questionSchema.findByIdAndUpdate(id,{yes:data.yes+1},(err) =>{
                callback(err);
            })
        })
    }
        
    else{
        findById(id,(err,data)=>{
            if(err) console.log(err);
            questionSchema.findByIdAndUpdate(id,{no:data.no+1},(err) =>{
                callback(err);
            })
        })
    }
}


module.exports = {
    create,
    queryData,
    findById,
    vote,
    findRandom
}