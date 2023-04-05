let SwiperSlider = (SliderNumber, sliderSpeed) => {
  const swiper = new Swiper(SliderNumber, {
    slidesPerView: 4,
    autoplay: {
      delay: sliderSpeed,
    },
    spaceBetween: 25,
    reverse: true,
    allowSlideNext: true,
    allowSlidePrev: true,

    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
  });
};

//*Best Selling Products  Swiper

let bestSellingSlider = document.querySelector("#swiper1");

//*Top Just Landed Items Swiper
let justLandedItemsSlider = document.querySelector("#swiper2");

//*Top Offered Products Swiper
let topOfferedProductsSlider = document.querySelector("#swiper3");

SwiperSlider(bestSellingSlider, 1600);
SwiperSlider(justLandedItemsSlider, 1800);
SwiperSlider(topOfferedProductsSlider, 2000);
