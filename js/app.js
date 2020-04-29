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
   let mainNavLinks = document.querySelectorAll("nav ul a");
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
   var typed = new Typed('#typed', {
      stringsElement: '#role',
      loop: true,
      typeSpeed: 65,
      backSpeed: 65,
      cursorChar: "|"
    });
})();


const fadeIn = (function() {
   const items = document.querySelectorAll('.timeline li');

   const isInViewport = el => {
   const rect = el.getBoundingClientRect();
   return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
         (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
   };

   const run = () =>
   items.forEach(item => {
      if (isInViewport(item)) {
         item.classList.add('show');
      }
   });

   // Events
   window.addEventListener('load', run);
   window.addEventListener('resize', run);
   window.addEventListener('scroll', run);

})();



if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('/sw.js')
      .then(reg => {})
      .catch(err => {})
}