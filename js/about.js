let searchInput = document.querySelector('.search-input')

searchInput.addEventListener('focus', () =>{
  'use strict';
  searchInput.setAttribute('placeholderValue', searchInput.getAttribute('placeholder'))
  searchInput.setAttribute('placeholder', '')
})
searchInput.addEventListener('blur', () =>{
  'use strict';
  searchInput.setAttribute('placeholder', searchInput.getAttribute('placeholderValue'))
  searchInput.setAttribute('placeholderValue', '')
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


let features = document.querySelectorAll('.feature')

features.forEach(feature => {
  feature.addEventListener('mouseover', ActiveRemove)
})

function ActiveRemove(){
  features.forEach(feature => {
    feature.classList.remove('active')
    this.classList.add('active')
  })
}



let statsSection = document.querySelector('.stats')
let counters = document.querySelectorAll('.text .counter')
let started = false 

function statsCounter(e){
  let countValue = e.dataset.val; 
  let count = setInterval(() =>{
    e.textContent++ 
    if(e.textContent == countValue){
      clearInterval(count)
    }
  }, 4000 / countValue)
}




function toTop(){
  if (window.scrollY >= 500){
    document.getElementById('toButton').classList.add('show')
  }
  else{
    document.getElementById('toButton').classList.remove('show')
  }
}

window.onscroll = function(){
  if(window.scrollY >= statsSection.offsetTop - 570){
    if(!started){
      counters.forEach((counter) => statsCounter(counter))
    }
    started = true
  }
  else if (window.scrollY > 70){
    linksHeader.classList.add('active')
  }
  else {
    linksHeader.classList.remove('active')
  }
  toTop()
}





$(document).ready(function(){
  $('.feedback-slider').owlCarousel({
    loop: true, 
    autoplay: true, 
    nav: true,
    responsiveClass: true,
    dots: false,
    // margin: 0,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      1140: {
        items: 2,
        margin: 20
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


let questions = document.querySelectorAll('.question-box .box')


questions.forEach(box => {
  box.addEventListener('click', removeActive)
})


questions.forEach(box => {
  box.addEventListener('click', removeActive)
})

function removeActive(){
  questions.forEach(box => {
    box.classList.remove('active')
    this.classList.add('active')
  })
}

let body = document.querySelector('body')
let openVideo = document.querySelector('.open-video')
let videoPopup = document.querySelector('.video-popup')
let closeVideo = document.querySelector('.closeVideo')
let video = document.getElementById('video')

openVideo.addEventListener('click', () =>{
  videoPopup.classList.add('active')
  body.style.overflow = 'hidden'
})

closeVideo.addEventListener('click', () =>{
  videoPopup.classList.remove('active')
  video.pause()
  video.currentTime = 0
  body.style.overflow = 'auto'
})

