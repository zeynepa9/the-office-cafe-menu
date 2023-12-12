
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import './style.css';


console.log('The Office Cafe Menu loaded');



  
loadHome(); //home default 
  



  
  document.getElementById('homeTab').addEventListener('click', loadHome);
  document.getElementById('menuTab').addEventListener('click', loadMenu);
  document.getElementById('contactTab').addEventListener('click', loadContact);
  
