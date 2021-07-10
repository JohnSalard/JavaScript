const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const html = document.querySelector('html');
const iconBtn = document.querySelector('.btn i');

btn.addEventListener('click', (e) => {
  search.classList.toggle('active');
  input.focus();
});

document.addEventListener('click', (e) => {
  const isClickInsideElement = btn.contains(e.target);
  if (!isClickInsideElement && input.value.length === 0) {
    search.classList.remove('active');
  }
});
