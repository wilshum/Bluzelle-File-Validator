function dragoverHandler(evt) {
    evt.preventDefault();
}

function dropHandler(evt) {//evt 為 DragEvent 物件
    evt.preventDefault();
    var file = evt.dataTransfer.files[0];//由DataTransfer物件的files屬性取得檔案物件

    console.log(evt.dataTransfer)

    var reader = new FileReader();

    // If we use onloadend, we need to check the readyState.
    reader.onloadend = function (evt) {
        if (evt.target.readyState == FileReader.DONE) { // DONE == 2

            var wordArray = CryptoJS.lib.WordArray.create(evt.target.result);
            var hash = CryptoJS.SHA256(wordArray);

            let inf = document.getElementById('inf')
            inf.innerHTML = 'name : ' + file.name + '<br>' +
                'size : ' + file.size + ' bytes<br>' +
                'type : ' + file.type + '<br>' +
                'SHA-256 : ' + hash.toString()
        }
    };

    reader.readAsArrayBuffer(file)
}


