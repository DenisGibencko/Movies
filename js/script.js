"use strict"

function ibg(){

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();


let menuIcon = document.querySelector('.header__icon');
let body = document.querySelector('body');
let menuBody = document.querySelector('.header__menu');
let header = document.querySelector('.header');

let menuLinks = document.querySelectorAll('.menu__link')

menuIcon.addEventListener("click", function(e) {
	menuIcon.classList.toggle('_active');
	menuBody.classList.toggle('_active');
	body.classList.toggle('_lock');
	header.classList.toggle('_active');
})



let jArrow = document.querySelector('.jenres__arrow');
let jRow = document.querySelector('.jenres__jenres');



jArrow.addEventListener("click", function(e) {
	jArrow.classList.toggle('_active');
	jRow.classList.toggle('_active');
})


menuLinks.forEach(menuLink => 
 menuLink.addEventListener("click", function(e){
	menuIcon.classList.remove('_active');
	menuBody.classList.remove('_active');
	body.classList.remove('_lock');
}))
