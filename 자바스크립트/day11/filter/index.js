//map : 치환,변경
const arr = [1, 2, 3, 4, 5];
const multi = arr.map((value) => value ** 2);
console.log(multi);

//filter : 걸러줌
const newArr = arr.filter((value) => value > 3);
console.log(newArr);

//세글자 이상
const str = ["생일", "파티", "플러팅", "올리브영"];
const newStr = str.filter((value) => value.length > 2);
console.log(newStr);

//3만원 이하 구매
const obj = [
	{ food: "rawFish", price: 80000 },
	{ food: "cake", price: 40000 },
	{ food: "soju", price: 1800 },
	{ food: "ricecake", price: 20000 },
];
const newObj = obj.filter((value) => value.price <= 30000);
console.log(newObj);

//홀수 true 짝수 false
// const yummy = obj.map((v, i) => {
// 	if (i % 2 === 0) {
// 		v.yummy = false;
// 	} else {
// 		v.yummy = true;
// 	}
// 	return v;
// });
const yummy = obj.map(
	(v, i) => (i % 2 === 0 ? (v.yummy = false) : (v.yummy = true), v)
);
console.log(yummy);

//forEach
obj.forEach((v) => {
	v.tax = true;
});
console.log(obj);

//ad 포함은 거르기
const strArr = ["and", "notad", "abcd"];
const newStrArr = strArr.filter((value) => !value.includes("ad"));
console.log(newStrArr);

//자연수 배열로 바꾸기
const a = 12345;
const newA = a
	.toString()
	.split("")
	.reverse()
	.map((value) => parseInt(value));
console.log(newA);

//index
const num = [2, 4, 6, 8, 10];
num.map((value, index) => {
	console.log(value, index);
});

//핸드폰 번호 가리기
const phoneNum = "01033334444";
const arrPhoneNum = phoneNum.split("");
const hide = arrPhoneNum.map((v, i) => {
	arrPhoneNum.length - i > 4 ? (v = "*") : v;
	return v;
});
const hidePhoneNum = hide.join("");
console.log(hidePhoneNum);
