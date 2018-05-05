const ICON = {
    question: 'question circle outline',
    check: 'check',
    loading: 'notched circle loading',
    times: 'times',
}

const COLOR = {
    info: 'info',
    warning: 'warning',
    positive: 'positive',
    negative: 'negative',
}

$(document).ready(() => {
    $('.menu .item').tab()
})

let console_register = new Vue({
    el: '#console_register',
    data: {
        color: '',
        icon: ICON.question,
        message: 'please select file',
    }
})

let console_query = new Vue({
    el: '#console_query',
    data: {
        color: '',
        icon: ICON.question,
        message: 'please select file',
    }
})

let table_register = new Vue({
    el: '#table_register',
    data: {
        fileName: '',
        checksum: '',
    }
})

let table_query = new Vue({
    el: '#table_query',
    data: {
        fileName: '',
        checksum: '',
    }
})

function dragoverHandler(evt) {
    evt.preventDefault()
}

//register
function dropHandler_register(evt) { //evt 為 DragEvent 物件
    evt.preventDefault()
    let file = evt.dataTransfer.files[0]
    let reader = new FileReader()

    console_register.color = ''
    console_register.icon = ICON.loading
    console_register.message = 'loading'

    // If we use onloadend, we need to check the readyState.
    reader.onloadend = function (evt) {
        if (evt.target.readyState == FileReader.DONE) { // DONE == 2
            console_register.color = COLOR.info
            console_register.icon = ICON.check
            console_register.message = 'Ready to register'

            let wordArray = CryptoJS.lib.WordArray.create(evt.target.result)
            let hash = CryptoJS.SHA256(wordArray)

            console.log(file)

            table_register.fileName = file.name
            table_register.checksum = hash.toString()
        }
    }
    reader.readAsArrayBuffer(file)
}

//query
function dropHandler_query(evt) { //evt 為 DragEvent 物件
    evt.preventDefault()
    let file = evt.dataTransfer.files[0]
    let reader = new FileReader()

    console_query.color = ''
    console_query.icon = ICON.loading
    console_query.message = 'loading'

    // If we use onloadend, we need to check the readyState.
    reader.onloadend = function (evt) {
        if (evt.target.readyState == FileReader.DONE) { // DONE == 2
            console_query.color = COLOR.info
            console_query.icon = ICON.check
            console_query.message = 'Ready to verify'

            let wordArray = CryptoJS.lib.WordArray.create(evt.target.result)
            let hash = CryptoJS.SHA256(wordArray)

            table_query.fileName = file.name
            table_query.checksum = hash.toString()
        }
    }
    reader.readAsArrayBuffer(file)
}