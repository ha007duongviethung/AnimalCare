const breed = $('.js-br')
const name = $('.js-n')

breed.addEventListener('input', () => {
	if(breed.value != "") {
		name.removeAttribute('disabled')
		let element = breed.value.toUpperCase()
		if(element == "DOG" || element == "DOGS") {
			name.setAttribute('list', 'ndog')
		} else if (element == "CAT" || element == "CATS") {
			name.setAttribute('list', 'ncat')
		} else if (element == "BIRD" || element == "BIRDS") {
			name.setAttribute('list', 'nbird')
		} else if (element == "FISH") {
			name.setAttribute('list', 'nfish')
		} else {
			name.removeAttribute('list')
		}
	} else {
		name.setAttribute('disabled', '')
	}
})
