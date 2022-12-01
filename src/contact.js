function contact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const h1 = document.createElement('h1');
  h1.textContent = 'Contact Us';

  const info = document.createElement('div');

  const number = document.createElement('div');
  number.classList.add('info');
  number.textContent = '123 456 789';

  const address = document.createElement('div');
  address.classList.add('info');
  address.textContent = 'Andromeda, PA-99-N2, Coast-Celestial';

  const imgHolder = document.createElement('div');

  info.appendChild(h1);
  contact.appendChild(imgHolder);
  info.appendChild(number);
  info.appendChild(address);
  contact.appendChild(info)

  return contact;
}

function createContact(name, ingredients) {
  const contact = document.createElement('div');
  contact.classList.add('contactlist');

  const menuName = document.createElement('div');
  menuName.textContent = name;

  const ing = document.createElement('div');
  ing.textContent = ingredients;

  contact.appendChild(menuName);
  contact.appendChild(ing);

  return contact;
}
export { contact };