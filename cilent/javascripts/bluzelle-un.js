const bluzelle = require('bluzelle')
bluzelle.connect('ws://13.78.130.82:51010', '9b654021-6dbb-43cb-9cdd-2a75e489668c')

//register-submit
$('#register_bt').click(() => {
    console.log('register')
    bluzelle.create($('#file_name-register').text(), {
        checksum: $('#checksum-register').text()
    }).then(() => {
        console.log("record Inserted")
    }, error => {
        console.log(error)
    })
})

//verify-submit
$('#query_bt').click(() => {
    console.log("verify")
    bluzelle.has($('#file_name-query').text()).then(hasMyKey => {
        console.log("has file");
        bluzelle.read($('#file_name-query').text()).then(value => {
            console.log(value)
            if (value.checksum == $('#checksum-query').text()) {
                console.log("file: " + $('#file_name-query').text() + " is Valid");
            } else {
                console.log("file: " + $('#file_name-query').text() + " is Invalid");
            }
        }, error => {
            console.log(error)
        })
    }, error => {
        console.log(error);
    })
})