// Get DOM elements
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');


// Add click event to burger menu
burgerMenu.addEventListener('click', function () {
  mobileMenu.classList.toggle('open');
});

// Check to see how wide the window is
window.addEventListener('resize', function () {
  if (window.innerWidth > 800) {
    mobileMenu.classList.remove('open');
  }
});