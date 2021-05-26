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
    320: {
      spaceBetween: 20
    },
    480: {
      spaceBetween: 30
    },
    1000: {
      spaceBetween: 80
    }
  }
});

function hideTitle() {
  let title = document.querySelector('.customers__quotes-title');

  title.classList.toggle('disabledTitle');
}

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}