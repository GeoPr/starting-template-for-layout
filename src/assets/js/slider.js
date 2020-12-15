// ================================================================================================================================================================================================================================================================================================================================
// BUILD SWIPER \\
const _swipers = document.querySelectorAll('._swiper')

if (_swipers.length > 0) {
  _swipers.forEach(swiper => {
    const swiperHTML = swiper.innerHTML
    const swiperContainer = document.createElement('div')

    swiperContainer.className = 'swiper-container'

    swiper.insertAdjacentElement('afterend', swiperContainer)
    swiperContainer.insertAdjacentHTML('beforeend', swiperHTML)

    swiper.innerHTML = ''
    swiper.append(swiperContainer)
  })
}
// BUILD SWIPER \\
// ================================================================================================================================================================================================================================================================================================================================
// SLIDER \\
import {
  Swiper,
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow,
} from 'swiper'
Swiper.use([Navigation, Pagination, Scrollbar, EffectCoverflow])

const nameOfSlider = new Swiper(document.querySelector('.slider'), {
  // ================================================================================================================================================================================================================================================================================================================================
  // OPTIONS \\
  slidesPerView: 1, // 'auto'
  spaceBetween: 0,
  speed: 500,
  centeredSlides: false,
  initialSlide: 0,
  autoHeight: true,
  observer: true,
  direction: 'horizontal', // horizontal, vertical
  effect: 'slide', // slide, fade, cube, coverflow, flip
  loop: true, // infinity
  // autoplay: {
  //   delay: 4000,
  // },

  // freeMode: true, // for main slider
  // thumbs: {
  //   // for preview slider
  //   swiper: Slider,
  // },

  breakpoints: {
    991.98: {},
    767.98: {},
    575.98: {},
    320.98: {},
  },
  // OPTIONS \\
  // ================================================================================================================================================================================================================================================================================================================================
  // CONTROL \\
  pagination: {
    type: 'bullets', // fraction, bullets, progressbar, custom
    el: '.slider__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider__arrow_next',
    prevEl: '.slider__arrow_prev',
  },
  slideClass: 'slider__slide',
  slideActiveClass: 'slider__slide_active',
  slideVisibleClass: 'slider__slide_visible',
  slideNextClass: 'slider__slide_next',
  slidePrevClass: 'slider__slide_prev',
  wrapperClass: 'swiper-container',
  // CONTROL \\
  // ================================================================================================================================================================================================================================================================================================================================
})

// SLIDER \\
// ================================================================================================================================================================================================================================================================================================================================
