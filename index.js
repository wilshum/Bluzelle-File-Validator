const bluzelle = require('bluzelle');
const CryptoJS = require("crypto-js");

var app = express();
var server = require('http').Server(app);

const SERVER_PORT = 8000;

const IP = '13.78.131.140:51010';
const UUID  = "7862031e-e253-4bc2-81d5-7bb42276cd5d";

bluzelle.connect('ws://' + IP, UUID);
console.log('Bluzelle Connected!');

var fileContentHash = "13";


bluzelle.has('mykey').then(fileName => { 
    console.log("has file"); }, error => { console.log(error); 
});
// bluzelle.create('mykey', { d: 13 }).then(() => {
//  console.log("first key") }, error => { console.log(error) 
// });

bluzelle.update('mykey', { b: 15 }).then(() => { console.log('updated');}, error => { console.log(error); });


// bluzelle.read('mykey').then(obj => {
//     console.log(obj);

//     for(key in obj) {
//         var value = obj[key];
//         //console.log (key, value);
//         if (value == fileContentHash){
//             console.log("file: " + key + " is Valid");
//         }
//         else{
//             console.log("file: " + key + " is Invalid");
//         }
//     }
// }, error => { console.log(error) })
// .catch(function (error) {
//      console.log("Promise Rejected: " + error);
// });


