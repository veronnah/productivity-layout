const homeSlider = new Swiper('.home-slider__container', {
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

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let playBtn = document.querySelector('.swiper-autoplay-btn');
playBtn.addEventListener('click', () => {
  homeSlider.autoplay.start();
});

const startSlider = new Swiper('.start__slider-container', {
  pagination: {
    el: '.swiper-pagination',
  },
  loop: false,

  speed: 800,
  effect: 'slide',

  fadeEffect: {
    crossFade: true
  },
  watchOverflow: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const quotesSlider = new Swiper('.quotes__slider-container', {
  pagination: {
    el: '.swiper-pagination',
  },
  loop: false,
  spaceBetween: 80,
  slidesPerView: 'auto',
  centeredSlides: true,
  roundLengths: true,
  loopAdditionalSlides: 30,
  speed: 800,
  effect: 'slide',

  fadeEffect: {
    crossFade: true
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
     
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      
      spaceBetween: 30
    },
    // when window width is >= 640px
    1000: {
    
      spaceBetween: 80
    }
  }
});


function hideTitle() {
  let title = document.querySelector('.customers__quotes-title');

  title.classList.toggle('disabledTitle');
}