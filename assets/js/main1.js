const listSlogan = [
	'We give preference to your pets. Because pets made life better',
	'We love your pets like they are our own',
	'Where the pets want to come again',
]

const slogan = $('.js-sl')
let id = 1
setInterval(() => {
	slogan.innerText = listSlogan[id]
	id++
	if(id == listSlogan.length) id = 0
}, 3000)

const listBackground = [
	'./assets/img/bg.png',
	'./assets/img/bg3.png',
	'./assets/img/bg5.png',
]

const topBackground = $('.js-bg')
let id1 = 0
setInterval(() => {
	topBackground.style.background = "url(" + listBackground[id1] + ") no-repeat center center"
	topBackground.style.backgroundSize = 'contain'
	topBackground.style.animation = 'leftToCenter ease .5s'
	setTimeout(() => {
		topBackground.style.animation = ''
	}, 2000)
	id1++
	if(id1 == listBackground.length) id1 = 0
}, 6000)