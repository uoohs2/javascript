//1. 어떤 문자열이 들어오면 그것을 대문자화 시켜서 돌려주는 함수
const upperCase = (x) => x.toUpperCase();
console.log(upperCase("leeyoonji"));

//2. 어떤 문자열이 들어오면 맨 뒤에 엄준식을 붙여서 돌려주는 함수
const umm = (x) => x + "엄준식";
console.log(umm("ㅎㅇ"));

//3. 문자열이 세개 매개변수로 왔을 때, 서로 다 이어주는 함수
const three = (a, b, c) => a + b + c;
console.log(three("이", "윤", "지"));

//4. 홀/짝 알려주는 함수
const num = (x) => (x % 2 === 0 ? "짝수" : "홀수");
console.log(num(65));

//5. 어떤 문자가 들어올 때, 앞/뒤 "찐막" 붙여주는 함수
const last = (x) => "찐막" + x + "찐막";
console.log(last("붕어빵"));

//6. 객체가 들어오면 umm : "엄준식" 생성하는 함수
const object = (x) => {
	x.umm = "엄준식";
	return x;
};
console.log(object({ yoonji: "윤지" }));

//7. 객체 {name : "latte", price : 2500}=> LATTE, 3500
const change = (x) => {
	const name_ = x.name;
	const price_ = x.price;
	x.name = name_.toUpperCase();
	x.price = price_ + 1000;
	return x;
};
console.log(change({ name: "latte", price: 2500 }));

//8. 6번 7번 합친 함수
const newObject = (x) => {
	x.name = x.name.toUpperCase();
	x.price += 1000;
	x.umm = "엄준식";
	return x;
};
console.log(newObject({ name: "latte", price: 2500 }));

//9. {name : "latte", price : 2500} + discount : 2250
const discount = (x) => {
	x.discount = x.price * 0.9;
	return x;
};
console.log(discount({ name: "latte", price: 2500 }));

//10. prcie 3000원 이상일 때 10% 할인 금액
const newPrice = (x) => {
	if (x.price >= 3000) {
		x.price *= 0.9;
	}
	return x;
};
console.log(newPrice({ name: "latte", price: 10000 }));
