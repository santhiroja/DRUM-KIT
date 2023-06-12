
// To detect what we clicked
var len=document.querySelectorAll(".drum").length;
for (var i=0; i<len;i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function ()
  {
var buttonInnerHtml=this.innerHTML;
  makeSound(buttonInnerHtml);
  animated(buttonInnerHtml);
  });
}
// To detect what key we pressed
document.addEventListener("keydown",function(event){
makeSound(event.key);
animated(event.key);
});
// To perform the action
function makeSound(receive){
  switch(receive){
  case "w":
  var tom4=new Audio("sounds/tom-4.mp3");
  tom4.play();
  break;

  case "a":
  var crash=new Audio("sounds/crash.mp3");
  crash.play();
  break;

  case "s":
  var tom3=new Audio("sounds/tom-3.mp3");
  tom3.play();
  break;

  case "d":
  var snare=new Audio("sounds/snare.mp3");
  snare.play();
  break;

  case "j":
  var tom1=new Audio("sounds/tom-1.mp3");
  tom1.play();
  break;

  case "k":
  var kick_bass=new Audio("sounds/kick-bass.mp3");
  kick_bass.play();
  break;

  case "l":
  var tom2=new Audio("sounds/tom-2.mp3");
  tom2.play();
  break;
  default:
console.log(receive);
  }
}
// Adding animation
function animated(currentKey)
{
var currentButton=document.querySelector("."+currentKey);
currentButton.classList.add("pressed");

setTimeout(function (){
currentButton.classList.remove("pressed");
}, 100);
}
