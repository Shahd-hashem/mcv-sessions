let rocket = document.getElementById("rocket");
let btn = document.getElementById("btn");
function lanuch() {
  rocket.classList.add("fly");
}
btn.addEventListener("click",lanuch );
