function nav() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const home = document.createElement('div');
  home.textContent = 'Home';

  const menu = document.createElement('div');
  menu.textContent = 'Menu';

  const contact = document.createElement('div');
  contact.textContent = 'Contact';

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
}

export { nav };