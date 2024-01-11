const service = document.querySelector('.service');
const info = document.querySelector('.info');
const btn = document.querySelector('.btn');

let isServiceChecked = false;
let isInfoChecked = false;

service.addEventListener('click', function (e) {
  isServiceChecked = e.target.checked;
  if (isServiceChecked && isInfoChecked) {
    btn.style.backgroundColor = 'green';
  } else {
    btn.style.backgroundColor = 'tomato';
  }
});

info.addEventListener('click', function (e) {
  isInfoChecked = e.target.checked;
  if (isServiceChecked && isInfoChecked) {
    btn.style.backgroundColor = 'green';
  } else {
    btn.style.backgroundColor = 'tomato';
  }
});

btn.addEventListener('click', function () {
  if (isServiceChecked && isInfoChecked) {
    window.alert('가입이 완료되었습니다.');
  } else {
    if (!isServiceChecked && !isInfoChecked) {
      window.alert('서비스, 개인정보 체크해주세요.');
    } else if (!isServiceChecked) {
      window.alert('서비스 체크해주세요.');
    } else {
      window.alert('개인정보 체크해주세요.');
    }
  }
});
