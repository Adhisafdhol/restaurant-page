function home() {
  const home = document.createElement('div');
  home.classList.add('home');
  const heading = document.createElement('h1');
  heading.textContent = 'Celestial Burger';
  home.appendChild(heading);
  const hQuote = document.createElement('div');
  hQuote.textContent = 'Delicious burgers serve from otherworldly dimension.';
  home.appendChild(hQuote);

  return home;
};

export { home };