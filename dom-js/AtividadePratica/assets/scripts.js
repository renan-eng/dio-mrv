const btn = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const darkMode = 'dark-mode';

btn.addEventListener('click', () => {
  mudarModo();
  mudarTexto();
})

function mudarModo() {
  btn.classList.toggle(darkMode);
  h1.classList.toggle(darkMode);
  body.classList.toggle(darkMode);
  footer.classList.toggle(darkMode);
}

function mudarTexto() {
  if(body.classList.contains(darkMode)){
    btn.innerHTML = 'Light Mode';
    h1.innerHTML = 'Dark Mode ON';
    return;
  }
  btn.innerHTML = 'Dark Mode';
  h1.innerHTML = 'Light Mode ON';
}