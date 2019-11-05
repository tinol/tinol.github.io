var header = document.querySelector('header');
var toggler = document.querySelector('#theme-toggle');

toggler.addEventListener('click', themeToggle);
if (sessionStorage.theme == "invert") themeToggle(1);

function themeToggle(stored) {
  if (stored !== 1) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerText = '* { transition: background-image .2s, background .3s; }';
    document.head.appendChild(style);
  }
  document.body.classList.toggle("prefer");
  document.body.classList.toggle("invert");
  header.classList.toggle("header-prefer");
  header.classList.toggle("header-invert");
  toggler.classList.toggle("toggle-prefer");
  toggler.classList.toggle("toggle-invert");
  sessionStorage.setItem("theme", document.body.classList);
}