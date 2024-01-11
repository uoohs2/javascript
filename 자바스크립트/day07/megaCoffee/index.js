const container = document.querySelector(".container");
const card = document.querySelector(".card");
const ice = document.querySelector(".ice");
const hot = document.querySelector(".hot");
const nameKr = document.querySelector(".nameKr");
const nameEg = document.querySelector(".nameEg");

const coffee1 = {
	name: {
		kr: "왁자지껄 팝핑 스무디언즈",
		eg: "Loudly Popping Minions Smoothie",
	},
	isIce: true,
	src: "1.jpg",
};
const coffee2 = {
	name: {
		kr: "스모어 블랙쿠키 프라페",
		eg: "S'mores Black-Cookie Frappe",
	},
	isIce: true,
	src: "2.jpg",
};
const coffee3 = {
	name: {
		kr: "화이트 뱅쇼",
		eg: "White Vin Chaud",
	},
	isIce: false,
	src: "3.jpg",
};
const coffee4 = {
	name: {
		kr: "스노우 샹그리아 에이드",
		eg: "Snow Sangria Ade",
	},
	isIce: true,
	src: "4.jpg",
};

function renderCoffee(x) {
	container.insertAdjacentHTML(
		"beforeend",
		`<div class="card">
        ${
			x.isIce
				? `<span class="ice">ICE</span>`
				: `<span class="hot">HOT</span>`
		}
        <img src=${x.src} alt="" />
        <h3 class="nameKr">${x.name.kr}</h3>
        <p class="nameEg">${x.name.eg}</p>
        </div>`
	);
}
renderCoffee(coffee1);
renderCoffee(coffee2);
renderCoffee(coffee3);
renderCoffee(coffee4);
