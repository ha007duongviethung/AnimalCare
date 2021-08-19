const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const menu = $('.js-mn svg')
const listItem = $('.js-l-it')
let isShow = false
menu.addEventListener('click', () => {
	isShow = !isShow
	if(isShow) listItem.classList.remove('hid')
	else listItem.classList.add('hid')
})

// user
const listSign = $$('.js-sg')
const modal = $('.js-md')
const signForm = $$('.js-f')
const listClose = $$('.js-cl svg')
const input = $$('input')
const ipRemember = $('.js-rmb')
const register = $('.js-rg') 

ipRemember.addEventListener('click', () => {
	if(ipRemember.checked == true) register.removeAttribute('disabled')
	else register.setAttribute('disabled', '')
})

for(const close of listClose) {
	close.addEventListener('click', () => {
		modal.classList.add('hid')
		for(const inp of input) {
			inp.value = ""
		}
	})
	modal.addEventListener('click', () => {
		modal.classList.add('hid')
		for(const inp of input) {
			inp.value = ""
		}
	})
}

for(const sign of listSign) {
	sign.addEventListener('click', () => {
		modal.classList.remove('hid')
		for(const element of signForm) {
			element.classList.add('hid')
			element.addEventListener('click', (event) => {
				event.stopPropagation()
			})
		}	
		if(sign.innerText == 'Sign in') {
			signForm[0].classList.remove('hid')
		} else if(sign.innerText == 'Sign up') {
			signForm[1].classList.remove('hid')
		} else {
			signForm[2].classList.remove('hid')
		}
	})
}