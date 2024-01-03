const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");
const navbar = document.querySelector(".navbar");

closeBtn.style.display = "none";
navbar.style.display = "none";

openBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);

function open() {
	openBtn.style.display = "none";
	closeBtn.style.display = "block";
	navbar.style.display = "block";
}

function close() {
	openBtn.style.display = "block";
	closeBtn.style.display = "none";
	navbar.style.display = "none";
}
