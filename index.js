const bluzelle = require('bluzelle');
const CryptoJS = require("crypto-js");
var express = require('express');

var app = express();
var server = require('http').Server(app);

const SERVER_PORT = 8000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/crypto-js/index.html');
});

app.use('/crypto-js', express.static(__dirname + '/crypto-js'));

server.listen(process.env.PORT || SERVER_PORT);
console.log('Server Started! localhost: ' + SERVER_PORT);



const IP = '13.78.130.82:51010';
const UUID  = "7862031e-e253-4bc2-81d5-7bb42276cd5d";

bluzelle.connect('ws://13.78.130.82:51010', UUID);
console.log('Bluzelle Connected!');


var fileContentHash = "13";

bluzelle.read('mykey').then(obj => {
    console.log(obj);

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


