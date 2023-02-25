$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true
  });
  $('.responsive').slick({
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

let productNum = document.querySelector('.product-num')
let caretPlus = document.querySelector('.caret-plus')
let caretMinus = document.querySelector('.caret-minus')

caretPlus.addEventListener('click', () =>{
  productNum.value ++
})
caretMinus.addEventListener('click', () =>{
  productNum.value --
})

let body = document.querySelector('body')
let buyCanvas = document.getElementById('buyCanvas')
let buyOverlay = document.getElementById('buyOverlay')
let addtoCart = document.querySelector('.add-toCart')


addtoCart.addEventListener('click', () =>{
  buyCanvas.classList.add('active')
  buyOverlay.classList.add('active')
  body.style.overflow = 'hidden'
})


let closeBuyCanvas = document.getElementById('closeBuyCanvas')

closeBuyCanvas.addEventListener('click', () =>{
  buyCanvas.classList.remove('active')
  buyOverlay.classList.remove('active')
  body.style.overflow = 'auto'
})


let loveOverlay = document.getElementById('loveOverlay')
let loveCanvas = document.getElementById('loveCanvas')
let addwishlist = document.querySelector('.add-wishlist')


addwishlist.addEventListener('click', () =>{
  loveOverlay.classList.add('active')
  loveCanvas.classList.add('active')
  body.style.overflow = 'hidden'
})


let closeLoveCanvas = document.getElementById('closeLoveCanvas')
closeLoveCanvas.addEventListener('click', () =>{
  loveOverlay.classList.remove('active')
  loveCanvas.classList.remove('active')
  body.style.overflow = 'auto'
})

let detailsCanvas = document.getElementById('detailsCanvas')
let compare = document.querySelector('.compare')
let detailsOverlay = document.getElementById('detailsOverlay')

compare.addEventListener('click', () =>{
  detailsCanvas.classList.add('active')
  detailsOverlay.classList.add('active')
  body.style.overflow = 'hidden'
})


let closeDetailsCanvas = document.getElementById('closeProductView')
closeDetailsCanvas.addEventListener('click', () =>{
  detailsCanvas.classList.remove('active')
  detailsOverlay.classList.remove('active')
  body.style.overflow = 'auto'
})

let butns = document.querySelectorAll('.buttons .butn')
let description = document.querySelector('.description')
let descriptionText = document.querySelector('.description-text')
let review = document.querySelector('.review')
let comments = document.querySelector('.customer-reviews')


butns.forEach(butn => {
  butn.addEventListener('click', removeActive)
})

function removeActive(){
  butns.forEach(butn => {
    butn.classList.remove('active')
    this.classList.add('active')
  })
}

review.addEventListener('click', () =>{
  descriptionText.classList.remove('active')
  comments.classList.add('active')
})

description.addEventListener('click', () =>{
  descriptionText.classList.add('active')
  comments.classList.remove('active')
})

let details_Canvas = document.getElementById('detailsCanvas')
let seeProduct = document.querySelectorAll('.seeProduct')
let details_Overlay = document.getElementById('detailsOverlay')
seeProduct.forEach(button => {
  button.addEventListener('click', () =>{
    detailsCanvas.classList.add('active')
    detailsOverlay.classList.add('active')
    body.style.overflow = 'hidden'
  })
})

let close_DetailsCanvas = document.getElementById('closeProductView')
closeDetailsCanvas.addEventListener('click', () =>{
  detailsCanvas.classList.remove('active')
  detailsOverlay.classList.remove('active')
  body.style.overflow = 'auto'
})

let buy_Canvas = document.getElementById('buyCanvas')
let buy_Overlay = document.getElementById('buyOverlay')
let openBuyCanvas = document.querySelectorAll('.goToCaret')

openBuyCanvas.forEach(button =>{
  button.addEventListener('click', () =>{
    buyCanvas.classList.add('active')
    buyOverlay.classList.add('active')
    body.style.overflow = 'hidden'
  })
})


let close_BuyCanvas = document.getElementById('closeBuyCanvas')

closeBuyCanvas.addEventListener('click', () =>{
  buyCanvas.classList.remove('active')
  buyOverlay.classList.remove('active')
  body.style.overflow = 'auto'
})

let love_Overlay = document.getElementById('loveOverlay')
let love_Canvas = document.getElementById('loveCanvas')
let loveButtons = document.querySelectorAll('.likeProduct')

loveButtons.forEach(button => {
  button.addEventListener('click', () =>{
    loveOverlay.classList.add('active')
    loveCanvas.classList.add('active')
    body.style.overflow = 'hidden'
  })
})

let close_LoveCanvas = document.getElementById('closeLoveCanvas')
closeLoveCanvas.addEventListener('click', () =>{
  loveOverlay.classList.remove('active')
  loveCanvas.classList.remove('active')
  body.style.overflow = 'auto'
})