//map(변경/치환/change/변환)

//짝수면 10더하기 홀수면 제곱
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((value) => (value % 2 === 0 ? value + 10 : value ** 2));
console.log(newArr);

//문자에 o가 들어가면 대문자로
const arr1 = ["storm", "mapo", "olive", "flirting"];

const newArr1 = arr1.map((value) =>
	value.includes("o") ? value.toUpperCase() : value
);
console.log(newArr1);

//문자가 4글자 이하면 길이로 아니면 대문자로
const newArr2 = arr1.map((value) =>
	value.length <= 4 ? value.length : value.toUpperCase()
);
console.log(newArr2);

//문자는 대문자, 숫자는 10더하기,
const soccer = [
	{ nation: "korea", rank: 22 },
	{ nation: "japan", rank: 18 },
	{ nation: "china", rank: 104 },
];
// const newSoccer = soccer.map((value) => {
// 	value.nation = value.nation.toUpperCase();
// 	value.rank += 10;
// 	return value;
// });
// console.log(newSoccer);

//30위 이상이면 underdog : true
// const underdog = soccer.map((value) => {
// 	if (value.rank <= 30) {
// 		value.underdog = false;
// 	} else {
// 		value.underdog = true;
// 	}
// 	return value;
// });
const underdog = soccer.map((value) =>
	value.rank <= 30
		? ((value.underdog = false), value)
		: ((value.underdog = true), value)
);
console.log(underdog);

const test = [
	{
		dateTime: "2024-01-15T08:39:24.958+0000",
		type: "view",
		queryItemId: "8809949541382",
		item: {
			itemId: "8809949541382",
			imageUrl: "10/0000/0019/A00000019810902ko.jpg?l=ko",
			itemName:
				"[더블기획] 피지오겔 DMT 페이셜 크림 100ml+100ml 증정 기획",
			itemUrl: "goodsNo=A000000198109",
			categoryId: "10000010008",
			brandId: "A000729",
			count: 3,
			rank: null,
			rankDiff: null,
			countDiff: null,
			id: "8809949541382",
		},
	},
];
const newItem = {};
test.map((value) => {
	newItem.queryItemId = value.queryItemId;
	newItem.itemName = value.item.itemName;
	newItem.brandId = value.item.brandId;
	newItem.count = value.item.count;
});
console.log(newItem);
