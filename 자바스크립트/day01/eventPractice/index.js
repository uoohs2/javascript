const darkBtn = document.querySelector(".darkBtn");
const whiteBtn = document.querySelector(".whiteBtn");
const body = document.querySelector("body");

darkBtn.addEventListener("click", darkMode);
whiteBtn.addEventListener("click", whiteMode);

function darkMode() {
	body.style.backgroundColor = "black";
}
function whiteMode() {
	body.style.backgroundColor = "white";
}


