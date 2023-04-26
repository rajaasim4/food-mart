let SwiperSlider = (SliderNumber, sliderSpeed, nextBtn, prevBtn) => {
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
      nextEl: nextBtn,
      prevEl: prevBtn,
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

let swiper1nextBtn = document.querySelector(".swiper1-next");
let swiper1prevBtn = document.querySelector(".swiper1-prev");

let bestSellingSlider = document.querySelector("#swiper1");

//*Top Just Landed Items Swiper

let swiper2nextBtn = document.querySelector(".swiper2-next");
let swiper2prevBtn = document.querySelector(".swiper2-prev");
let justLandedItemsSlider = document.querySelector("#swiper2");

//*Top Offered Products Swiper

let swiper3nextBtn = document.querySelector(".swiper3-next");
let swiper3prevBtn = document.querySelector(".swiper3-prev");
let topOfferedProductsSlider = document.querySelector("#swiper3");

SwiperSlider(bestSellingSlider, 1600, swiper1nextBtn, swiper1prevBtn);
SwiperSlider(justLandedItemsSlider, 1800, swiper2nextBtn, swiper2prevBtn);
SwiperSlider(topOfferedProductsSlider, 2000, swiper3nextBtn, swiper3prevBtn);
