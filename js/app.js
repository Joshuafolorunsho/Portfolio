const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');



const toggle = () => {
   header.classList.toggle('toggle');
} 

hamburger.addEventListener('click', toggle);
