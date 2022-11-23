import './style.css';
import img from './img/mae-mu-unsplash.jpg';
import 'normalize.css';
import { nav } from './nav';

function component() {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  const review = document.createElement('div');
  review.classList.add('review');
  review.textContent = 'Best quality burgers serve directly to your plate! The atmosphere and customer service make you feel like you are in another world.';
  const content = document.getElementById('content')
  const headline = document.createElement('div');
  headline.classList.add('headline');
  const heading = document.createElement('h1');
  heading.textContent = 'Celestial Burger';
  headline.appendChild(heading);
  const hQuote = document.createElement('div');
  hQuote.textContent = 'Delicious burgers serve from otherworldly dimension.';
  headline.appendChild(hQuote);


  const myImg = new Image();
  myImg.src = img;
  
  content.appendChild(headline);
  sidebar.appendChild(nav());
  sidebar.appendChild(review);
  content.appendChild(sidebar);
  
  return content;
}

document.body.appendChild(component());