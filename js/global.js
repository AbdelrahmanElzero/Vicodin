let linksHeader = document.querySelector('.links-header')
window.onscroll = function(){
  if (window.scrollY > 70){
    linksHeader.classList.add('active')
  }
  else {
    linksHeader.classList.remove('active')
  }
  toTop()
}


function toTop(){
  if (window.scrollY >= 500){
    document.getElementById('toButton').classList.add('show')
  }
  else{
    document.getElementById('toButton').classList.remove('show')
  }
}
