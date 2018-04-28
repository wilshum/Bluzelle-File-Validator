const bluzelle = require('bluzelle');
const CryptoJS = require("crypto-js");
var express = require('express');

var app = express();
var server = require('http').Server(app);

const SERVER_PORT = 8000;
const UUID  = "7862031e-e253-4bc2-81d5-7bb42276cd5d";
const IP = '13.78.130.82:51010';

bluzelle.connect('ws://'+ IP, UUID);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/cilent/index.html');
});

app.use('/cilent', express.static(__dirname + '/cilent'));

server.listen(process.env.PORT || SERVER_PORT);
console.log('Server Started! localhost: ' + SERVER_PORT);


// bluzelle.create('mykey', { a: 13 }).then(() => { 
//     console.log("data created!")
// }, error => {console.log(error)});

// bluzelle.has('mykey').then(hasMyKey => {
//     console.log(hasMyKey);
// }, error => { console.log(error) });

var fileContentHash = "13";

bluzelle.read('mykey').then(obj => {
    console.log(obj); 
    // const fileName = 'a';
    // console.log(obj[fileName]);
    for(key in obj) {
        var value = obj[key];
        //console.log (key, value);
        if (value == fileContentHash){
            console.log("file: " + key + " is Valid");
        }
        else{
            console.log("file: " + key + " is Invalid");
        }
    }
}, error => { console.log(error) })
.catch(function (error) {
     console.log("Promise Rejected: " + error);
});