// More
const more = $('.js-mr')
const less = $('.js-le')
const description = $('.js-de')

if(description.offsetHeight > 224) {
	description.classList.add('ln-14')
	more.classList.remove('hid')
	more.addEventListener('click', () => {
		description.classList.remove('ln-14')
		less.classList.remove('hid')
		more.classList.add('hid')
	})
	less.addEventListener('click', () => {
		description.classList.add('ln-14')
		less.classList.add('hid')
		more.classList.remove('hid')
	})
}

// Sort
const sort = $('.js-sr')
const page = $('.js-p')
const button = $$('.js-bt')
const navList = $$('.js-ap-l')
let isShow2 = false
let isShow3 = false

for(const bt of button) {
	bt.addEventListener('click', () => {
		if(bt.dataset.id == 1) {
			isShow2 = !isShow2
			if(isShow2) {
				navList[0].classList.remove('hid')
				const listItem = navList[0].querySelectorAll('li')
				for(const element of listItem) {
					element.addEventListener('click', () => {
						sort.innerText = element.innerText
						isShow2 = false
						navList[0].classList.add('hid')
					})
				}
			} else {
				navList[0].classList.add('hid')
			}
		} else {
			isShow3 = !isShow3
			if(isShow3) {
				navList[1].classList.remove('hid')
				const listItem = navList[1].querySelectorAll('li')
				for(const element of listItem) {
					element.addEventListener('click', () => {
						page.innerText = element.innerText
						isShow2 = false
						navList[1].classList.add('hid')
					})
				}
			} else {
				navList[1].classList.add('hid')
			}
		}
	})
}
