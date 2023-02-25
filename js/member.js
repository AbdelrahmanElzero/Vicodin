let boxes = document.querySelectorAll('.box')

boxes.forEach(box => {
  box.addEventListener('mouseover', ActiveRemove)
})

function ActiveRemove(){
  boxes.forEach(box => {
    box.classList.remove('active')
    this.classList.add('active')
  })
}


let selectBtn = document.querySelector('.select-btn')
let options = document.querySelector('.options')
let icon = document.querySelector('.icon')

selectBtn.addEventListener('click', () =>{
  icon.classList.toggle('active')
  options.classList.toggle('active')
})

let selectContent = document.querySelector('.select-content')
let optionItems = document.querySelectorAll('.options .option-item')

console.log(selectContent.textContent)

optionItems.forEach(item => {
  item.addEventListener('click', () => {
    selectContent.textContent = item.textContent
  })
  item.addEventListener('click',removeActive)
})

function removeActive(){
  optionItems.forEach(item => {
    item.classList.remove('active')
    this.classList.add('active')
  })
}
