//0~100이 담긴 배열
const a = [];
for (let i = 0; i <= 100; i++) {
  a.push(i);
}
console.log(a);

//짝수가 담긴 배열
const b = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) b.push(i);
}
console.log(b);

//5의 배수가 담긴 배열
const c = [];
for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0) c.push(i);
}
console.log(c);

//배열의 평균값
const arr = [591, 2903, 102, 129, 120];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
const avg = sum / arr.length;
console.log(avg);

//배열에서 가장 작은 값
const d = [5, 1, 4, 12, 8];
let min = d[0];
for (let i = 0; i < d.length; i++) {
  if (d[i] < min) {
    min = d[i];
  }
}
console.log(min);

//1~5의 제곱이 담긴 배열
const e = [];
for (let i = 1; i <= 5; i++) {
  e.push(i ** 2);
}
console.log(e);

//1~100까지 3의 배수
const f = [];
const g = [];
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    f.push('🥕');
    g.push(i ** 2);
  } else {
    f.push(i);
    g.push('🐶');
  }
}
console.log(f, g);

const h = [];
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    h.push('🥕');
  } else {
    h.push(i + 10);
  }
}
console.log(h);

//1~100까지 홀수의 총 합
let plus = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    plus += i;
  }
}
console.log(plus);

//짝수 토끼 6의 배수는 당근
let x = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    if (i % 6 === 0) {
      x.push('🥕');
    } else {
      x.push('🐶');
    }
  } else {
    x.push(i);
  }
}
console.log(x);

//1~100 홀수 강아지 짝수 고양이 3배수 토끼 4배수 쥐 7배수 윤지
let y = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    if (i % 3 == 0) {
      y.push('토끼');
    } else if (i % 7 == 0) {
      y.push('윤지');
    } else y.push('강아지');
  } else {
    if (i % 4 == 0) {
      y.push('쥐');
    } else y.push('고양이');
  }
}
console.log(y);
