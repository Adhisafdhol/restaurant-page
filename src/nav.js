function nav() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const home = document.createElement('button');
  home.textContent = 'Home';
  home.classList.add('nav-home');

  const menu = document.createElement('button');
  menu.textContent = 'Menu';
  menu.classList.add('nav-menu');

  const contact = document.createElement('button');
  contact.textContent = 'Contact';
  contact.classList.add('nav-contact');

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
}

export { nav };