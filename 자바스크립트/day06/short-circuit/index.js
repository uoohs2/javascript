const loginBox = document.querySelector('.loginBox');
const id = document.querySelector('.id');
const pw = document.querySelector('.pw');
const login = document.querySelector('.login');

let idValue;
id.addEventListener('input', function (e) {
  idValue = e.target.value;
});

let pwValue;
pw.addEventListener('input', function (e) {
  pwValue = e.target.value;
});

login.addEventListener('click', function () {
  const isValid = pwValue === '1234!';
  isValid ? loginSuccess(idValue) : window.alert('비밀번호를 확인해주세요!');
});

function loginSuccess(nickname) {
  loginBox.innerHTML = '';
  loginBox.insertAdjacentHTML(
    'beforeend',
    `<span>${nickname || 'guest'}</span>`
  );
}
