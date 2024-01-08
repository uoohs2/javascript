const text = document.querySelector(".text");
const number = document.querySelector(".number");

text.addEventListener("input", function (e) {
	number.innerHTML = e.target.value.length;
});
