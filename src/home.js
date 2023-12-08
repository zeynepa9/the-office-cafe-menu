import clearContent from './clear';
import Icon from './icon.png';


function loadHome() {
  clearContent();
  const content = document.getElementById('content');

  const heading = document.createElement('h1');
  heading.textContent = 'Welcome The Office Coffee!';
  heading.classList.add('home-heading'); // add class for css

  const image = new Image();
  image.src = Icon;
  image.classList.add('home-image'); // add class for css


  const description = document.createElement('p');
  description.textContent = ' Check out the favorite recipes inspired by the workers at Dunder-Mifflin';
  description.classList.add('home-description'); // add class for css


  content.appendChild(heading);
  content.appendChild(image);
  content.appendChild(description);
}


  export default loadHome;