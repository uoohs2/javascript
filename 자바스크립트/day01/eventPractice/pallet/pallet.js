const redBtn = document.querySelector(".red");
const orangeBtn = document.querySelector(".orange");
const yellowBtn = document.querySelector(".yellow");
const pallet = document.querySelector(".pallet");

redBtn.addEventListener("click", redBox);
orangeBtn.addEventListener("click", orangeBox);
yellowBtn.addEventListener("click", yellowBox);

function redBox() {
	pallet.style.backgroundColor = "red";
	pallet.innerHTML = "선택된 색깔은 빨강";
}
function orangeBox() {
	pallet.style.backgroundColor = "orange";
	pallet.innerHTML = "선택된 색깔은 주황";
}
function yellowBox() {
	pallet.style.backgroundColor = "yellow";
	pallet.innerHTML = "선택된 색깔은 노랑";
}
