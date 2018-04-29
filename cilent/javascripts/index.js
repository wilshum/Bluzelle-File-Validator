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

    $('#register-console i').removeClass().addClass('notched circle loading icon')

    // If we use onloadend, we need to check the readyState.
    reader.onloadend = function (evt) {
        if (evt.target.readyState == FileReader.DONE) { // DONE == 2
            $('#register-console').removeClass().addClass('ui positive icon message')
            $('#register-console i').removeClass().addClass('check icon')
            $('#register-console div').text('ready to register')

            let wordArray = CryptoJS.lib.WordArray.create(evt.target.result)
            let hash = CryptoJS.SHA256(wordArray)

            console.log(file)

            $('#file_name-register').text(file.name)
            $('#checksum-register').text(hash.toString())
        }
        else {
            $('#register-console').addClass('negative')
            $('#register-console div').text('read error')
        }
    }
    reader.readAsArrayBuffer(file)
}

//query
function dropHandler_query(evt) { //evt 為 DragEvent 物件
    evt.preventDefault()
    let file = evt.dataTransfer.files[0]
    let reader = new FileReader()

    $('#query-console i').removeClass().addClass('notched circle loading icon')

    // If we use onloadend, we need to check the readyState.
    reader.onloadend = function (evt) {
        if (evt.target.readyState == FileReader.DONE) { // DONE == 2
            $('#query-console').removeClass().addClass('ui positive icon message')
            $('#query-console i').removeClass().addClass('check icon')
            $('#query-console div').text('ready to verify')

            let wordArray = CryptoJS.lib.WordArray.create(evt.target.result)
            let hash = CryptoJS.SHA256(wordArray)

            console.log(file)

            $('#file_name-query').text(file.name)
            $('#checksum-query').text(hash.toString())
        }
        else {
            $('#query-console').addClass('negative')
            $('#query-console div').text('read error')
        }
    }

    reader.readAsArrayBuffer(file)
}