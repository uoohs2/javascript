const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const btn = document.querySelector(".btn");

let h;
let w;

height.addEventListener("input", function (e) {
	h = parseInt(e.target.value);
});
weight.addEventListener("input", function (e) {
	w = parseInt(e.target.value);
});
btn.addEventListener("click", function (e) {
	const bmi = w / (h / 100) ** 2;

	if (bmi > 0) {
		alert(`bmi는 ${bmi}입니다.`);
	} else {
		alert(`키와 몸무게를 다시 입력해주세요.`);
	}
});
