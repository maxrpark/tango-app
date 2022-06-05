import App from './app.js';

import { Navbar, Footer } from './components/index.js';

const Index = () => {
  return `
  ${Navbar()}
  ${App()}
  ${Footer()}

  `;
};

document.querySelector('#app')!.innerHTML = Index();
