import clearContent from './clear'; 
import images from './images';

const menuItems = [
  {
    title: 'Pretzel',
    description: 'Inspired by Pretzel Day...',
    price: '$5.99',
    image: images.Pretzel
  },
  {
    title: 'Jell-O',
    description: 'Inspired by the Stapler in Jell-O',
    price: '$3.99',
    image: images.Jello 
  },
  {
    title: 'Chili Chicken',
    description: 'Inspired by Kevins Famous Chili',
    price: '$12.99',
    image: images.Chili 
  },
  {
    title: 'Chocolate Pudding',
    description: 'Inspired by Michaels Favorite Pudding',
    price: '$12.99',
    image: images.Pudding 
  },
  {
    title: 'Osso Buco',
    description: 'Inspired by Jans Dinner Party Osso Buco. The osso buco that needs to braise for about three hours',
    price: '$20.99',
    image: images.OssoBuco 
  },
  {
    title: 'Beet Salad',
    description: 'Inspired by Dwights Beet Salad',
    price: '$12.99',
    image: images.BeetSalad 
  },
  {
    title: 'Fettuccine Alfredo',
    description: 'Inspired by Michaels Pre 5K Fettuccine Alfredo',
    price: '$16.99',
    image: images.FettuccineAlfredo
  },
  {
    title: 'Hot Dog',
    description: 'Inspired by Beach Games Hot Dogs',
    price: '$6.99',
    image: images.HotDog
  }

];

function loadMenu() {
  clearContent();
  const content = document.getElementById('content');
  
  const menuSection = document.createElement('section');
  menuSection.classList.add('menu');

  menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const title = document.createElement('h2');
    title.textContent = item.title;

    const image = new Image();
    image.src = item.image; // use different images for every item
    image.alt = item.title;

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = item.description;   

    const price = document.createElement('p');
    price.textContent = item.price;

    menuItem.appendChild(title);
    menuItem.appendChild(image);
    menuItem.appendChild(description);
    menuItem.appendChild(price);
    menuSection.appendChild(menuItem);
  });

  content.appendChild(menuSection);
}

export default loadMenu;
