// const input = document.querySelector('.input');
// const showBtn = document.querySelector('.showBtn');
// const hideBtn = document.querySelector('.hideBtn');

// showBtn.style.display = 'none';

// showBtn.addEventListener('click', function () {
//   showBtn.style.display = 'none';
//   hideBtn.style.display = 'inline';

//   showBtn.style.display = 'none'
//     ? (input.type = 'password')
//     : (input.type = 'text');
// });

// hideBtn.addEventListener('click', function () {
//   showBtn.style.display = 'inline';
//   hideBtn.style.display = 'none';

//   showBtn.style.display = 'inline'
//     ? (input.type = 'text')
//     : (input.type = 'password');
// });

const input = document.querySelector('.input');
const button = document.querySelector('.button');
const showIcon = `<i class="fas fa-eye"></i>`;
const hideIcon = `<i class="fas fa-eye-slash"></i>`;

button.addEventListener('click', function () {
  input.type = input.type === 'text' ? 'password' : 'text';

  const icon = input.type === 'text' ? hideIcon : showIcon;
  button.innerHTML = icon;
});
