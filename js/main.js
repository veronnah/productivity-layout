const homeSlider = new Swiper('.swiper-container', {
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
     loop: false,

     speed: 800,
     effect: 'slide', 

     fadeEffect: {
         crossFade: true
     },
     watchOverflow: true,
 });

 let playBtn  = document.querySelector('.swiper-autoplay-btn'); 
 playBtn.addEventListener('click', ()=>{
    homeSlider.autoplay.start();
 });
