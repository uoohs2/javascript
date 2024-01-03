const text = document.querySelector(".text");
const button = document.querySelector(".button");
const box = document.querySelector(".box");

let inputValue;

text.addEventListener("input", function (e) {
	inputValue = e.target.value;
});
button.addEventListener("click", function () {
	const p = document.createElement("p");
	p.innerHTML = inputValue;
	box.appendChild(p);
	text.value = "";
});
