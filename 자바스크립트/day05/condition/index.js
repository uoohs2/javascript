const countBox = document.querySelector(".countBox");
const minusBtn = document.querySelector(".minusBtn");
const num = document.querySelector(".num");
const plusBtn = document.querySelector(".plusBtn");
const submitBtn = document.querySelector(".submitBtn");

plusBtn.addEventListener("click", function () {
	const newNum = parseInt(num.innerHTML);
	num.innerHTML = newNum + 1;
});

minusBtn.addEventListener("click", function () {
	const newNum = parseInt(num.innerHTML);
	if (newNum > 0) {
		num.innerHTML = newNum - 1;
	}
});

submitBtn.addEventListener("click", function () {
	const newNum = parseInt(num.innerHTML);
	if (newNum > 0) {
		alert(`${newNum}개를 선택하였습니다.`);
	} else {
		alert("수량을 선택해주세요.");
	}
});

const lengthBox = document.querySelector(".lengthBox");
const text = document.querySelector(".text");
const length = document.querySelector(".length");

text.addEventListener("input", function (e) {
	const newText = e.target.value;

	if (newText.length <= 20) {
		length.innerHTML = newText.length;
	} else {
        e.target.value = newText.substring(0,20);
	}
});
