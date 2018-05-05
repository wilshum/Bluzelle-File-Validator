const bluzelle = require('bluzelle')
bluzelle.connect('ws://13.78.130.82:51010', '9b654021-6dbb-43cb-9cdd-2a75e489668c')

//register-submit
$('#bt-register').click(() => {
	console.log('register')

	console_register.color = ''
	console_register.icon = ICON.loading
	console_register.message = 'loading'

	bluzelle.has(table_register.fileName).then(hasMyKey => {
		if (hasMyKey) {
			console_register.color = COLOR.negative
			console_register.icon = ICON.times
			console_register.message = 'The file already exists'
		} else {
			bluzelle.create(table_register.fileName, {
				checksum: table_register.checksum
			}).then(() => {
				console_register.color = COLOR.positive
				console_register.icon = ICON.check
				console_register.message = 'Record Inserted'
			}, error => {
				console.log(error)
			})
		}
	})
})

//verify-submit
$('#bt-query').click(() => {
	console.log("verify")

	console_query.color = ''
	console_query.icon = ICON.loading
	console_query.message = 'loading'

	bluzelle.has(table_query.fileName).then(hasMyKey => {
		if (!hasMyKey) {
			console_query.color = COLOR.negative
			console_query.icon = ICON.times
			console_query.message = 'Can\'t find this file'
		} else {
			bluzelle.read(table_query.fileName).then(value => {
				if (value.checksum != table_query.checksum) {
					console_query.color = COLOR.negative
					console_query.icon = ICON.check
					console_query.message = 'The file is illegal'
				} else {
					console_query.color = COLOR.positive
					console_query.icon = ICON.check
					console_query.message = 'The file is valid'
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