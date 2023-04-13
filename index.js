let size = document.getElementById("size"),
  font_size = document.getElementById("font-size"),
  box = document.getElementById("box");

// 'screen' is name 👇 of a function
window.onresize = screen;
window.onload = screen;

// Function named 'screen' 👇

function screen() {
  Width = window.innerWidth;
  Height = window.innerHeight;
  Box_width = box.clientWidth;
  Box_height = box.clientHeight;
  f_size = window.getComputedStyle(font_size).fontSize;

  // Screen Size (Width & height)

  size.innerHTML = "Width : " + Width + " px";
  // size.innerHTML = "Height : " + Height + " px";

  // Display Font size
  font_size.innerHTML = `f-size : ` + f_size;

  // Box Width & height

  // box.innerHTML = "Width : " + Box_width;
  // box.innerHTML = "Height : " + Box_height;
}

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});