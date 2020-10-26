// Écrivez votre code JavaScript ici.

//ADD ITEM
const addItemInput = document.querySelector('.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

//list items
const listItems = document.getElementsByTagName('li');

listDiv.addEventListener('mouseover', (event) => {
  if(event.target.tagName == 'LI') {
  event.target.style.textTransform = 'uppercase';
  }
});

listDiv.addEventListener('mouseout', (event) => {
  if(event.target.tagName == 'LI') {
  event.target.style.textTransform = 'lowercase';
  }
