//container에 버튼 100개 만들기
for (let i = 0; i < 100; i++) {
	const button = document.createElement("button");
	button.innerHTML = "버튼";
	button.className = "button";

	const container = document.querySelector(".container");
	container.appendChild(button);
}
