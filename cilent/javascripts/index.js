
$(document).ready(() => {

    $('.menu .item').tab()

})

function dragoverHandler(evt) {
    evt.preventDefault()
}

//register
function dropHandler_register(evt) { //evt 為 DragEvent 物件
    evt.preventDefault()
    let file = evt.dataTransfer.files[0]
    let reader = new FileReader()

    // If we use onloadend, we need to check the readyState.
    reader.onloadend = function (evt) {
        if (evt.target.readyState == FileReader.DONE) { // DONE == 2

            let wordArray = CryptoJS.lib.WordArray.create(evt.target.result)
            let hash = CryptoJS.SHA256(wordArray)

            console.log(file)

            $('#company').text()
            $('#file_name').text(file.name)
            $('#program').text()
            $('#version').text()
            $('#checksum').text(hash.toString())
        }
    }

    reader.readAsArrayBuffer(file)
}

//query
function dropHandler_query(evt) { //evt 為 DragEvent 物件
    evt.preventDefault()
    let file = evt.dataTransfer.files[0]
    let reader = new FileReader()

    // If we use onloadend, we need to check the readyState.
    reader.onloadend = function (evt) {
        if (evt.target.readyState == FileReader.DONE) { // DONE == 2

            let wordArray = CryptoJS.lib.WordArray.create(evt.target.result)
            let hash = CryptoJS.SHA256(wordArray)

            console.log(file)

            $('#company').text()
            $('#file_name').text(file.name)
            $('#program').text()
            $('#version').text()
            $('#checksum').text(hash.toString())
        }
    }

    reader.readAsArrayBuffer(file)
}

//register-submit
function registerEvent() { //evt 為 DragEvent 物件

    const bluzelle = require('bluzelle');

    console.log("click");

    bluzelle.create('file.name', { version: hash }).then(() => {
        console.log("record Inserted") }, error => { console.log(error) 
    });
}

//verify-submit
function verifyEvent() { //evt 為 DragEvent 物件
    console.log("click");

    bluzelle.has('file.name').then(fileName => { 
        console.log("has file"); 


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
    }, error => { console.log(error) 
    });




    }, error => { console.log(error); 
    });
}
