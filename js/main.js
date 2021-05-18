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
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let playBtn = document.querySelector('.swiper-autoplay-btn');
playBtn.addEventListener('click', () => {
  homeSlider.autoplay.start();
});

const startSlider = new Swiper('.start__planning-slider', {
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