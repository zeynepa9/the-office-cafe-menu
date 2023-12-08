import clearContent from './clear';
import contactImage from './the-office-coffee-menu.jpeg';



function loadContact() {
  clearContent();
  const content = document.getElementById('content');

  const heading = document.createElement('h1');
  heading.textContent = 'Inspired by recipes from the show The Office';
  heading.classList.add('contact-heading'); 


  const image = new Image();
  image.src = contactImage; 
  image.classList.add('contact-image'); 

  const linkText = document.createTextNode('Credits: Taste of Home');
  const link = document.createElement('a');
  link.appendChild(linkText);
  link.href = 'https://www.tasteofhome.com/collection/recipes-inspired-by-the-office/';
  link.classList.add('contact-link'); // add class for link
  link.target = '_blank'; 


  const description = document.createElement('p');
  description.appendChild(link);
  description.classList.add('contact-description'); 

  content.appendChild(heading);
  content.appendChild(image);
  content.appendChild(description);
}

      

export default loadContact;