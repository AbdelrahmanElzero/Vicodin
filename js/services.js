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



$(document).ready(function(){
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