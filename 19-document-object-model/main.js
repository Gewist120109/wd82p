const btn = document.querySelector("#btn");
btn.addEventListener("click", changeWord);

function changeWord() {
  btn.textContent = "Clicked!";
}
