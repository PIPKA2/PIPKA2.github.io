const cursor = document.querySelector('.cursor');
const body = document.querySelector('body');
const open_menu = document.querySelector('.nav-btn');
const close_menu = document.querySelector('.close-btn');
const menu_links = document.querySelector('.menu-links')


document.addEventListener('mousemove', e=>{
    cursor.setAttribute('style', 'top: '+(e.pageY - 10)+'px; left:'+(e.pageX - 10)+'px;')
});

body.addEventListener('mouseout', () => {
    cursor.classList.add('hidden')
});
body.addEventListener('mouseover', () => {
    cursor.classList.remove('hidden')
});
body.addEventListener('mousemove', () => {
    cursor.classList.remove('hidden')
});
open_menu.addEventListener('mouseover', () =>{
    cursor.classList.add('on--open--close--button')
});
open_menu.addEventListener('mouseout', () =>{
    cursor.classList.remove('on--open--close--button')
});
close_menu.addEventListener('mouseover', () =>{
    cursor.classList.add('on--open--close--button')
});
close_menu.addEventListener('mouseout', () =>{
    cursor.classList.remove('on--open--close--button')
});





