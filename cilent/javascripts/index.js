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

            $('#file_name-register').text(file.name)
            $('#checksum-register').text(hash.toString())
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

            $('#file_name-query').text(file.name)
            $('#checksum-query').text(hash.toString())
        }
    }

    reader.readAsArrayBuffer(file)
}