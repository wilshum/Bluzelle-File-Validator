const bluzelle = require('bluzelle');

bluzelle.connect('ws://13.78.130.82:51010', '9b654021-6dbb-43cb-9cdd-2a75e489668c');

bluzelle.create('mykey', { a: 13 }).then(() => { console.log('test') }, error => { console.log(error) });