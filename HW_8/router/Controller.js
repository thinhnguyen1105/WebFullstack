const fs = require('fs');

let readFileSync = (path) =>{
    return JSON.parse(fs.readFileSync(path,'utf-8'));
}

let writeFile = (path, data, success) =>{
    fs.writeFile(path,JSON.stringify(data),(err)=>{
       if(err)  console.log(err);
       success(null); 
    });
}

module.exports = {
    readFileSync,
    writeFile
}