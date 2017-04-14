document.querySelector('.dropdown').addEventListener('click', function () {
  if (this.classList.contains('dropdown_open')) {
    this.classList.remove('dropdown_open');
  } else {
    this.classList.add('dropdown_open');
  }
});

var options = document.querySelectorAll('.dropdown__option');

for (var i = 0; i < options.length; i++) {
  var option = options[i];
  option.addEventListener('click', function () {
    if (!this.classList.contains('dropdown__option_active')) {
      var active = document.querySelector('.dropdown__option_active');
      active.classList.remove('dropdown__option_active');
      this.classList.add('dropdown__option_active');
    }
  });
}

