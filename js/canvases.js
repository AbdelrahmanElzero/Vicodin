let shopMenu = document.getElementById('shopMenu')
let overlayRight = document.getElementById('overlay-right')
let canvasRight = document.getElementById('canvasRight')

shopMenu.addEventListener('click', () =>{
  overlayRight.classList.add('active')
  canvasRight.classList.add('active')
})

let closeRightCanvas = document.getElementById('closeRightCanvas')
closeRightCanvas.addEventListener('click', () =>{
  overlayRight.classList.remove('active')
  canvasRight.classList.remove('active')
})


const closeRight = () => {
  overlayRight.classList.remove('active')
  canvasRight.classList.remove('active')
}

overlayRight.addEventListener('click', closeRight)
closeRightCanvas.addEventListener('click', closeRight)


let navToggler = document.querySelector('.nav-toggler')
let canvasLeft = document.getElementById('leftCanvas')
let overlayLeft = document.getElementById('overlay-left')

navToggler.addEventListener('click', () =>{
  navToggler.classList.add('active')
  overlayLeft.classList.add('active')
  canvasLeft.classList.add('active')
})



let closeCanvas = document.getElementById('close-canvas')

closeCanvas.addEventListener('click', ()=>{
  navToggler.classList.remove('active')
  overlayLeft.classList.remove('active')
  canvasLeft.classList.remove('active')
})

const closeLeft = () => {
  navToggler.classList.remove('active')
  overlayLeft.classList.remove('active')
  canvasLeft.classList.remove('active')
}

overlayLeft.addEventListener('click', closeLeft)
closeCanvas.addEventListener('click', closeLeft)

let aboutSubMenu = document.getElementById('about-sub')

aboutSubMenu.addEventListener('click', () =>{
  aboutSubMenu.classList.toggle('active')
})
