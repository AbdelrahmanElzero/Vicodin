$(document).ready(function(){
  $(".landing-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    dots: true,
    nav: true,
  })
  $(".feature-slider").owlCarousel({
    loop: true,
    autoplay: true, 
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      600: {
        items: 4
      },
      800: {
        items: 5
      },
      950: {
        items: 6
      }
    }
  })
  $(".blog-slider").owlCarousel({
    loop: true,
    autoplay: true, 
    dots: true,
    nav: true,
    margin: 30,
    navText: ['<i class="fa-solid fa-left-long"></i>', '<i class="fa-solid fa-right-long"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      800: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
})


let body = document.querySelector('body')
let searchButton = document.getElementById('search-button')
let overlayOne = document.getElementById('overlayOne')
let overlayTwo = document.getElementById('overlayTwo')
let searchBar = document.getElementById('searchBar')
let formCanvas = document.querySelector('.form-canvas')
let closeSearch = document.getElementById('closeSearch')

searchButton.addEventListener('click', () =>{
  overlayOne.classList.add('active')
  overlayTwo.classList.add('active')
  formCanvas.classList.add('active')
  body.style.overflow = 'hidden'
})

closeSearch.addEventListener('click', () =>{
  overlayOne.classList.remove('active')
  overlayTwo.classList.remove('active')
  formCanvas.classList.remove('active')
  body.style.overflow = 'auto'
})

let inputs = document.querySelectorAll('input')


inputs.forEach(input =>{
  input.addEventListener('focus', () =>{
    'use strict';
    input.setAttribute('placeholderValue', input.getAttribute('placeholder'))
    input.setAttribute('placeholder', '')
  })
  input.addEventListener('blur', () =>{
    'use strict';
    input.setAttribute('placeholder', input.getAttribute('placeholderValue'))
    input.setAttribute('placeholderValue', '')
  })
})




let detailsCanvas = document.getElementById('detailsCanvas')
let seeProduct = document.querySelectorAll('.seeProduct')
let detailsOverlay = document.getElementById('detailsOverlay')
seeProduct.forEach(button => {
  button.addEventListener('click', () =>{
    detailsCanvas.classList.add('active')
    detailsOverlay.classList.add('active')
    body.style.overflow = 'hidden'
  })
})

let closeDetailsCanvas = document.getElementById('closeProductView')
closeDetailsCanvas.addEventListener('click', () =>{
  detailsCanvas.classList.remove('active')
  detailsOverlay.classList.remove('active')
  body.style.overflow = 'auto'
})

let buyCanvas = document.getElementById('buyCanvas')
let buyOverlay = document.getElementById('buyOverlay')
let openBuyCanvas = document.querySelectorAll('.goToCaret')

openBuyCanvas.forEach(button =>{
  button.addEventListener('click', () =>{
    buyCanvas.classList.add('active')
    buyOverlay.classList.add('active')
    body.style.overflow = 'hidden'
  })
})


let closeBuyCanvas = document.getElementById('closeBuyCanvas')

closeBuyCanvas.addEventListener('click', () =>{
  buyCanvas.classList.remove('active')
  buyOverlay.classList.remove('active')
  body.style.overflow = 'auto'
})

let loveOverlay = document.getElementById('loveOverlay')
let loveCanvas = document.getElementById('loveCanvas')
let loveButtons = document.querySelectorAll('.likeProduct')

loveButtons.forEach(button => {
  button.addEventListener('click', () =>{
    loveOverlay.classList.add('active')
    loveCanvas.classList.add('active')
    body.style.overflow = 'hidden'
  })
})

let closeLoveCanvas = document.getElementById('closeLoveCanvas')
closeLoveCanvas.addEventListener('click', () =>{
  loveOverlay.classList.remove('active')
  loveCanvas.classList.remove('active')
  body.style.overflow = 'auto'
})

let countDownDate = new Date("Apr 20, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

function toTop(){
  if (window.scrollY >= 500){
    document.getElementById('toButton').classList.add('show')
  }
  else{
    document.getElementById('toButton').classList.remove('show')
  }
}




let header = document.getElementById('header')

window.onscroll = function(){ 
  if(window.scrollY > 100){
    header.classList.add('full')
  } else{
    header.classList.remove('full')
  }
  toTop()
}
