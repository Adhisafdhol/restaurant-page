import img from './img/eiliv-aceron-uBigm8w_MpA-unsplash.jpg';

function menu() {
  const menuContainer = document.createElement('menu');
  menuContainer.classList.add('menu');

  //create a side image container
  const imgHolder = document.createElement('div');
  imgHolder.classList.add('img-container');
  const myImage = new Image();
  myImage.src = img;
  imgHolder.appendChild(myImage);
  menuContainer.appendChild(imgHolder);

  //put all menu related element here
  const menuListContainer = document.createElement('div');
  menuListContainer.classList.add('menu-container');
  menuContainer.appendChild(menuListContainer);

  const menuHeading = document.createElement('h1');
  menuHeading.textContent = 'Today\'s Menu';
  menuListContainer.appendChild(menuHeading)

  const menuList = document.createElement('div');
  menuList.classList.add('menu-list');
  menuList.appendChild(createMenu('Galaxy Beef Burger', 'Beef Patty, Onions, Tomatoes, pickles, Lettuce, Ketchup, Mayo, Mustard'));
  menuList.appendChild(createMenu('Chicken Burger', 'Crispy Chicken, Chedder Cheese, Grilled Onion & Tomatoes, Lettuce, Pickles, Garlic Sauce, Mayo, Chipotle Sauce'));
  menuList.appendChild(createMenu('Celestial Special Burger', 'Beef Patty. Cream of Mushroom, Mozza Cheeze, Grilled Onions, Mayo'));
  menuList.appendChild(createMenu('Hot Doritos Burger', 'Crispy Chicken, Mozza Cheeze, Doritos, Grilled Onion & Tomatoes, Lettuce, Garlic Sauce, Buffalo Sauce. Mayo'));

  menuListContainer.appendChild(menuList);
  
  return menuContainer;
}

function createMenu(name, ingredients) {
  const menu = document.createElement('div');
  menu.classList.add('menulist');

  const menuName = document.createElement('div');
  menuName.textContent = name;

  const ing = document.createElement('div');
  ing.textContent = ingredients;

  menu.appendChild(menuName);
  menu.appendChild(ing);

  return menu;
}

export { menu };