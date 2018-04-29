const bluzelle = require('bluzelle')
bluzelle.connect('ws://13.78.130.82:51010', '9b654021-6dbb-43cb-9cdd-2a75e489668c')

//register-submit
$('#register_bt').click(() => {
	console.log('register')
	bluzelle.has($('#file_name-register').text()).then(hasMyKey => {
		if (hasMyKey) {
			$('#register-console').removeClass().addClass('ui negative icon message')
			$('#register-console div').text('the file is already exists')
			$('#register-console i').removeClass().addClass('times icon')
		} else {
			bluzelle.create($('#file_name-register').text(), {
				checksum: $('#checksum-register').text()
			}).then(() => {
				console.log("record Inserted")
				$('#register-console div').text('record inserted')
			}, error => {
				console.log(error)
			})
		}
	})
})

//verify-submit
$('#query_bt').click(() => {
	console.log("verify")
	bluzelle.has($('#file_name-query').text()).then(hasMyKey => {
		if (!hasMyKey) {
			$('#query-console').removeClass().addClass('ui negative icon message')
			$('#query-console div').text('can\'t find this file')
			$('#query-console i').removeClass().addClass('times icon')
		} else {
			console.log("has file");
			bluzelle.read($('#file_name-query').text()).then(value => {
				console.log(value)
				if (value.checksum == $('#checksum-query').text()) {
					console.log("file: " + $('#file_name-query').text() + " is Valid");
					$('#checksum-query').removeClass().addClass('positive')
					$('#query-console div').text('the file is Valid')
				} else {
					console.log("file: " + $('#file_name-query').text() + " is Invalid");
				}
			}, error => {
				console.log(error)
			})
		}
	}, error => {
		console.log(error)
	})
})

$('#tab-list').click(() => {
	$('#list').empty()
	bluzelle.keys().then(keys => {
		console.log(keys)
		for (let key of keys) {
			bluzelle.read(key).then(value => {
				console.log(value)
				$('#list').append(`<tr>
					<td class="collapsing">${key}</td>
					<td>${value.checksum}</td>
				</tr>`)
			}, error => {
				console.log(error)
			})
		}
	}, error => {
		console.log(error)
	})
})