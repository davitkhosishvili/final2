var burgerBtn = document.querySelector('.ul');
var navEl = document.querySelector('nav-wrapper');

burgerBtn.addEventListener('click', () => {
  navEl.classList.toggle('show');

  if (navEl.classList.contains('show')) {
    burgerBtn.innerHTML = '<i class="fa-solid fa-bars" style="color: #ffffff;"></i>';
  } else {
    burgerBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});