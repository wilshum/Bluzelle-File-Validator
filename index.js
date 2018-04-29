const bluzelle = require('bluzelle');
const CryptoJS = require("crypto-js");


const IP = '13.78.131.140:51010';
const UUID  = "7862031e-e253-4bc2-81d5-7bb42276cd5d";

bluzelle.connect('ws://' + IP, UUID);
console.log('Bluzelle Connected!');
