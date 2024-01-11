class Button {
	constructor(content, bg, click) {
		this.content = content;
		this.bg = bg;
		this.click = click;
	}
	render(parent) {
		const container = document.querySelector(parent);
		const button = document.createElement("button");
		button.innerHTML = this.content;
		button.style.backgroundColor = this.bg;
		button.addEventListener("click", this.click);
		container.appendChild(button);
	}
}

class RoundButton extends Button {
	constructor(content, bg, click, borderRadius) {
		super(content, bg, click);
		this.borderRadius = borderRadius;
	}
	render(parent) {
		super.render(parent);
		const container = document.querySelector(parent);
		const button = container.querySelector("button:last-child");
		button.style.borderRadius = this.borderRadius;
	}
}
const a = new Button("티모", "lightgrey", function () {
	alert("티모");
});
a.render(".box");
const b = new RoundButton(
	"이즈리얼",
	"skyblue",
	function () {
		alert("이즈리얼");
	},
	"20px"
);
b.render(".box");
