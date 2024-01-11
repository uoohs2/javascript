class Button {
	constructor(content, bg, border, borderRadius, click) {
		this.content = content;
		this.bg = bg;
		this.border = border;
		this.borderRadius = borderRadius;
		this.click = click;
	}
	render(parent) {
		const container = document.querySelector(parent);
		const button = document.createElement("button");
		button.innerHTML = this.content;
		button.style.backgroundColor = this.bg;
		button.style.border = this.border;
		button.style.borderRadius = this.borderRadius;
		button.addEventListener("click", this.click);
		container.appendChild(button);
	}
}

const a = new Button("입력", "tomato", "1px solid black", "10px", function () {
	window.alert("ㅎㅇㅎㅇ");
});
a.render(".box");
