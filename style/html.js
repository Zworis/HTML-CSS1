// let switches = document.getElementById("switches");
// let text = document.getElementById("hide");
// switches.addEventListener("mouseover", surprise);
//
// function surprise() {
//   text.style.display = "block";
// }
// swtiches.addEventListener("mouseover", ninja);
// function ninja() {
//   text.style.display = "none";
// }
console.log("Hello");
var buttons = document.getElementsByClassName("button");
var menu = document.getElementById("menu");
menu.addEventListener("click", classes);


function classes()
{
  console.log("Hello");
  menu.classList.toggle('open');

  for (let i = 0; i < buttons.length; i++) {
  buttons[i].classList.toggle('open');
  }
}
