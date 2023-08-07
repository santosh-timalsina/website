var heartIcons = document.getElementsByClassName('heart');
Array.from(heartIcons).forEach(function(heartIcon) {
  heartIcon.addEventListener('click', function() {
    heartIcon.classList.toggle('active');
  });
});
let searchForm = document.querySelector('.searchbar');
  let searchFormm = document.querySelector('button');

  document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    searchFormm.classList.toggle('active');
  };

let loginForm = document.querySelector('.f-box');
document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
};
let registerForm = document.querySelector('.register');
document.querySelector('#create').onclick = () => {
  registerForm.classList.toggle('active');
};

let loginnowForm = document.querySelector('.register');
document.querySelector('#log').onclick = () => {
   loginnowForm.classList.remove('active');

};

let log = document.querySelector('.f-box');
document.querySelector('#tata').onclick = () => {
  log.classList.toggle('active');
};