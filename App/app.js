//how to create file JSON from console 
// const fs = require('fs'); 

// fs.readFile;
// let dataFromFile = fs.readFileSync('./test.txt','utf-8');
// console.log(dataFromFile);

// fs.readFile('./package.json','utf-8',(error,data)=>{
//     if(error){
//         console.log(error);
//     }
//     console.log(data);
// });

// let dataWriteFile = "Hello World, it's write file testing "; 

// fs.writeFile('./test.txt',dataWriteFile,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("write file success");
// });


// let dataObject = {
//     a:5,
//     b:6
// };

// fs.writeFile('text.txt',JSON.stringify(dataObject),(err)=>{
//     if(err){
//         throw(err);
//     }
//     console.log("Write file fucking success")
// });

// fs.readFile('text.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(Object.keys(JSON.parse(data)));
// }
// );

// let fs = require('./fileController');
// console.log(fs);

// fs.readFile('text.txt',(fileData)=>{
//     console.log(fileData);
// });



const express = require('express');
const path = require('path');
const handlebar = require('express-handlebars');
const bodyParser = require('body-parser');
const fileController = require('./app_modules/fileController.js');
const home = require('./app_modules/home.js');
// const onClick = require ('./app_modules/onClick');
const question = require('./app_modules/question');
const ask = require('./app_modules/ask'); 


let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', handlebar({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var data = [...fileController.readFileSync('data.json')];

app.use('/',question);
app.use('/',ask);
app.use('/',home);
// app.use('/',onClick);




// app.get('/', (req, res) => {
//     console.log(path.resolve(__dirname, './public/introduction.html'));
//     res.sendFile(__dirname + '/public/introduction.html');
// });

// app.get('/flexbox', (req, res) => {
//     res.sendFile(__dirname + '/public/flexbox/flexbox.html');
// });
// app.get('/frontendpractice', (req, res) => {
//     res.sendFile(__dirname + '/public/frontendpractice/frontendpractice.html');
// });


app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/public/flexbox'));
// app.use(express.static(__dirname + '/public/frontendpractice'));


// app.get('/gift', (req, res) => {
//     res.send("Hello it's ***hub");
// });



app.listen(6969, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("App is start at port 6969");
});