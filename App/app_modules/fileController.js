const fs = require('fs');

let readFile = (path,onReadFileDone)=>{
    fs.readFile(path,'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        onReadFileDone(data);
    });
}
// use callback
let writeFile = (path,writeData,onWriteDataDone)=>{
   fs.writeFile(path,JSON.stringify(writeData),onWriteDataDone);
}

let readFileSync = (path)=>{
    return JSON.parse(fs.readFileSync(path,'utf-8'));
}

module.exports ={
    readFile,
    writeFile,
    readFileSync
}