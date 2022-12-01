import './style.css';
import 'normalize.css';
import { nav } from './nav';
import { home } from './home';
import { menu } from './menu'
import { contact } from './contact'

function component() {
  const content = document.getElementById('content');

  content.appendChild(nav());
  content.appendChild(home());
  
  return content;
}

document.body.appendChild(component());

const check = (() => {
  const content = document.getElementById('content');
  let currentPage = 'nav-home';
  const buttons = document.querySelectorAll('.nav > button');

  buttons.forEach(button => button.addEventListener('click', activate));

  function activate(e) {
    currentPage = this.className;
    buttons.forEach(button => deactivate(button));
    this.classList.add('active');
    loadPage(e);
  }

  function deactivate (button) {
    console.log(button.className !== currentPage);
    if (button.className !== currentPage ) {
      button.classList.remove('active');
    }
  }

  function loadPage(e) {
    console.log(e.target.textContent)
    if(e.target.textContent === 'Home') {
      content.replaceChild(home(), document.querySelector('#content > :nth-child(2)'))
    } else if (e.target.textContent === 'Menu') {
      content.replaceChild(menu(), document.querySelector('#content > :nth-child(2)'));
    } else if (e.target.textContent === 'Contact') {
      content.replaceChild(contact(), document.querySelector('#content > :nth-child(2)'))
    } else {
      return;
    } 
  }
})();
