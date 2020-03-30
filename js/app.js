const hamburger = document.querySelector('.hamburger');
var bigNav = document.querySelector('.big-nav');
const header = document.querySelector('.header');



const toggle = () => {
   header.classList.toggle('toggle');

   if (bigNav.style.display === 'none') {
      bigNav.style.display = 'block';
   } else {
      bigNav.style.display = 'none';
   }
} 

hamburger.addEventListener('click', toggle);
