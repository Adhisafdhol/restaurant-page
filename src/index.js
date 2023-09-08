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

//Append the pages to the html
document.body.appendChild(component());

const check = (() => {
  const content = document.getElementById('content');
  const buttons = document.querySelectorAll('.nav > button');
  buttons.forEach(button => button.addEventListener('click', activate));

  function activate(e) {
    const selectedPage = e.target.getAttribute('data-key')
    buttons.forEach(button => button.classList.remove('active'));
    this.classList.add('active');
    loadPage(selectedPage);
  }

  function loadPage(page) {
    if( page === 'home') {
      content.replaceChild(home(), document.querySelector('#content > :nth-child(2)'))
    } else if (page === 'menu') {
      content.replaceChild(menu(), document.querySelector('#content > :nth-child(2)'));
    } else {
      content.replaceChild(contact(), document.querySelector('#content > :nth-child(2)'))
    }
  }
})();
