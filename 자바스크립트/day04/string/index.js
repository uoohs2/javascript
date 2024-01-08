const plusBtn = document.querySelector('.plusBtn');
const minusBtn = document.querySelector('.minusBtn');
const number = document.querySelector('.number');

plusBtn.addEventListener('click', function () {
  number.innerHTML = parseInt(number.innerHTML) + 1;
});
minusBtn.addEventListener('click', function () {
  number.innerHTML = parseInt(number.innerHTML) - 1;
});
