//STICKY NAV BAR
window.onscroll = function() {zalipi()};

var nav = document.getElementsByClassName("nav")[0];
var sticky = nav.offsetTop;

function zalipi() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}

//FLIPANJE KARTICA

const linkflip = document.querySelectorAll(".linkflip");

function flip() {
  this.parentElement.parentElement.parentElement.classList.toggle("flip");
  
}
linkflip.forEach((link) => link.addEventListener("click", flip));

const linkflip2 = document.querySelectorAll(".linkflip2");

function flip2() {
  this.parentElement.parentElement.classList.toggle("flip");
  
  
}
linkflip2.forEach((link2) => link2.addEventListener("click", flip2));