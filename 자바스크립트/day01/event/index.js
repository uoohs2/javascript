//함수 정의(생성)
function hello() {
	window.console.log("안녕");
}
function legend(x) {
	window.console.log(`${x}는 레전드`);
}

//함수 실행
hello();
legend("자바스크립트");
legend("새해");
legend("페이커");

//버튼 클릭시 새해 인사 태그 생성
const button = document.querySelector(".button");
button.addEventListener("click", makeHappyNewYear); //addEventListener("어떤 종류 이벤트", "어떤 기능")

function makeHappyNewYear() {
	const div = document.createElement("div");
	div.innerHTML = "새해 복 많이 받으세요.";
	const body = document.querySelector("body");
	body.appendChild(div);
}
