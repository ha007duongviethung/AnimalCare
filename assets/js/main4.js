const button = $$('.js-bt')
const information = $$('.js-if')

button.forEach( function(element, index) {
	element.addEventListener('click', () => {
		$('.js-bt.at').classList.remove('at')
		element.classList.add('at')
		itemActive = $('.js-if.show')
		itemActive.classList.remove('show')
		itemActive.classList.add('hid')
		information[index].classList.add('show')
	})
});