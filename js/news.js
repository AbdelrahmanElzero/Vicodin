let body = document.querySelector('body')
let openVideo = document.getElementById('open-video')
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


$(document).ready(function(){
  $(".news-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: true,
    dots: false,
    navText: ['<i class="fa-solid fa-left-long"></i>', '<i class="fa-solid fa-right-long"></i>']
  })
})