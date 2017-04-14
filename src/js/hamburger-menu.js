document.querySelector('.hamburger-menu').addEventListener('click', function () {
  if (this.classList.contains('clicked')) {
    this.classList.remove('clicked');
  } else {
    this.classList.add('clicked');
  }
});