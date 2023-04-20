/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Pages/**/*.{html,js}",
    "./index.html",
    "./Js/**/*.{html,js}",
    "*",
  ],
  theme: {
    screens: {
      "3xl": { min: "1920px" },
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      xlg: { max: "1024px" },
      lg: { max: "991px" },
      md: { max: "768px" },
      smd: { max: "540px" },
      sm: { max: "426px" },
      xsm: { max: "377px" },
    },
    extend: {
      colors: {
        primarycolor: "#F8F8F8",
        primarytextcolor: "#898989",
      },
      backgroundImage: {
        bannerbg1: "url(/Assets/Header_img2.png)",
        bannerbg2: "url(/Assets/Header_img3.png)",
        mobileappbg: "url(/Assets/Mobile_app.png)",
        sectionimgbg: "url(/Assets/section_img_bg1.png)",
      },
      fontFamily: {
        opensans: "'Open Sans', sans-serif",
        garamondfont: "'EB Garamond', serif",
        nunitofont: "'Nunito', sans-serif",
      },
    },
  },
  plugins: [],
};
