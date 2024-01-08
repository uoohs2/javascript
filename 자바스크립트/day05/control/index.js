// control statement(제어문) : 코드를 순서 조작
//conditional statement(조건문)
//if, switch
//if문 ~ else문
// const a = window.prompt("숫자 입력 :");
// const b = parseInt(a);
// if (b > 0) {
// 	alert("b는 양수입니다.");
// } else if (b === 0) {
// 	alert("0입니다.");
// } else {
// 	alert("음수입니다.");
// }

//영어점수 얼마니?
//90 이상 "A", 80 이상 "B",70 이상 "C", 70 미만 "F"
// const score = parseInt(window.prompt("숫자 입력 :"));
// if (score >= 90) {
// 	alert("A");
// } else if (90 > score && score >= 80) {
// 	alert("B");
// } else if (80 > score && score >= 70) {
// 	alert("C");
// } else {
// 	alert("F");
// }

//교보문고 구매 프로그램
//50000 - 주차 5시간, 30000 - 주차 3시간, 20000 - 주차 2시간
// const price = parseInt(window.prompt("구매한 가격 : "));
// if(price >=50000){
//     alert("주차 5시간 무료입니다.")
// }else if(price>=30000){
//     alert("주차 3시간 무료입니다.")
// }else if (price>=20000){
//     alert("주차 2시간 무료입니다.")
// }else{
//     alert("무료시간이 없습니다.")
// }

//정수 입력시 양의 짝수or 양의 홀수or 0 or 음의 짝수 or 음의 홀수?
const num = parseInt(window.prompt("정수를 입력하세요"));
if (num >= 0) {
	if (num % 2 === 0) {
		if (num === 0) {
			alert("0입니다");
		} else {
			alert("양의 짝수");
		}
	} else {
		alert("양의 홀수");
	}
} else {
	if (num % 2 === 0) {
		alert("음의 짝수");
	} else {
		alert("음의 홀수");
	}
}
