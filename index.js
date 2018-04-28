const bluzelle = require('bluzelle');
const CryptoJS = require("crypto-js");

const UUID  = "7862031e-e253-4bc2-81d5-7bb42276cd5d";

bluzelle.connect('ws://13.78.130.82:51010', UUID);


bluzelle.create('mykey', { a: 13 }).then(() => { 
    console.log("data created!")
 }, error => {console.log(error)});
