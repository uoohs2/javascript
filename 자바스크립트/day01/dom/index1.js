//태그 생성하기

//버튼 만들기
const button = document.createElement("button"); //버튼 생성
button.innerHTML = "새로 생긴 버튼"; //버튼 꾸미기
//body에 추가하기
const body = document.querySelector("body");
body.appendChild(button);
