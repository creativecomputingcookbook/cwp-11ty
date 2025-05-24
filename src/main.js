import './styles/main.css';

import Alpine from 'alpinejs';
import persist from '@alpinejs/persist';

window.Alpine = Alpine;

Alpine.plugin(persist);

Alpine.start();

const env = document.querySelector('body').dataset.env;

// Check that service workers are supported
if ('serviceWorker' in navigator && env === 'production') {
  // use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    try {
      navigator.serviceWorker.register('/sw.js');
    } catch (error) {
      console.error('Service worker registration failed: ', error);
    }
  });
}

// makercode fix
let makercodes = document.getElementsByClassName("makercode")

for (let i = 0; i < makercodes.length; i++) {
  makercodes[i].addEventListener("load", e => {
    e.target.style.display = "inline";
  })
}
