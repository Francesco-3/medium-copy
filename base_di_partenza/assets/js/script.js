window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const hero = document.querySelector('.hero');

  const heroBottom = hero.getBoundingClientRect().bottom;

  if (heroBottom <= 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});