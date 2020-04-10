const ham =(function() {
   const hamburger = document.querySelector('.hamburger');
   var bigNav = document.querySelector('.big-nav');
   const header = document.querySelector('.header');


   const toggle = () => {
      header.classList.toggle('toggle');

      (bigNav.style.display === 'none') ?
         bigNav.style.display = 'block' :
         bigNav.style.display = 'none';
      
   } 

   hamburger.addEventListener('click', toggle);
})();

const scrollEffect = (function() {
   let mainNavLinks = document.querySelectorAll("nav ul li a");
   let mainSections = document.querySelectorAll("main section");

   let lastId;
   let cur = [];

   window.addEventListener("scroll", event => {
      let fromTop = window.scrollY;

      mainNavLinks.forEach(link => {
         let section = document.querySelector(link.hash);

         if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
         ) {
            link.classList.add("current");
         } else {
            link.classList.remove("current");
         }
      });
   });
})();


const changingRole = (function(){
   // Can also be included with a regular script tag
   import Typed from 'typed.js';

   var options = {
      strings: ['hhhh', 'hhhh'],
      typeSpeed: 40
   };


   var typed = new Typed('.element', options);
   
   // var typed2 = new Typed('#typed2', {
   //    strings: ['Some <i>strings</i> with', 'Some <strong>HTML</strong>', 'Chars &times; &copy;'],
   //    typeSpeed: 0,
   //    backSpeed: 0,
   //    fadeOut: true,
   //    loop: true
   //  });
})();