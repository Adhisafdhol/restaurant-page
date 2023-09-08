function nav() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const home = document.createElement('button');
  home.textContent = 'Home';
  home.setAttribute('data-key', 'home');
  home.classList.add('active');

  const menu = document.createElement('button');
  menu.textContent = 'Menu';
  menu.setAttribute('data-key', 'menu');

  const contact = document.createElement('button');
  contact.textContent = 'Contact';
  contact.setAttribute('data-key', 'contact');

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
}

export { nav };