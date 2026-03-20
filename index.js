let box=document.getElementById("color-box")
let btn=document.getElementById("change-color-btn")
function getRandomColor() {
  const randomHexColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  return randomHexColor

}

btn.addEventListener("click",function() {
console.log(getRandomColor());
const couleur=getRandomColor()
box.style.background=couleur
})