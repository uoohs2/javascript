const inputName = document.querySelector(".inputName");
const inputCount = document.querySelector(".inputCount");
const inputToken = document.querySelector(".inputToken");
const completeBtn = document.querySelector(".completeBtn");
const cardBox = document.querySelector(".cardBox");

let inputNameValue;
inputName.addEventListener("input", function (e) {
	inputNameValue = e.target.value;
});

let inputCountValue;
inputCount.addEventListener("input", function (e) {
	inputCountValue = e.target.value;
});

let inputTokenValue;
inputToken.addEventListener("input", function (e) {
	inputTokenValue = e.target.value;
});

function makeCard(inputNameValue, inputCountValue, inputTokenValue) {
	const card = document.createElement("div");
	card.className = "card";
	const cardName = document.createElement("h2");
	cardName.className = "cardName";
	cardName.innerHTML = inputNameValue;
	const cardCount = document.createElement("p");
	cardCount.className = "cardCount";
	cardCount.innerHTML = inputCountValue;
	const cardToken = document.createElement("button");
	cardToken.className = "cardToken";
	cardToken.innerHTML = inputTokenValue;

	card.appendChild(cardName);
	card.appendChild(cardCount);
	card.appendChild(cardToken);

	return card;
}

function clearInput(inputName, inputCount, inputToken) {
	inputName.value = "";
	inputCount.value = "";
	inputToken.value = "";
}

completeBtn.addEventListener("click", function () {
	const card = makeCard(inputNameValue, inputCountValue, inputTokenValue);
	cardBox.appendChild(card);

	clearInput(inputName, inputCount, inputToken);
});
