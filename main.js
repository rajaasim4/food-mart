//*Showing the Dynamically Year in Footer

let year = document.querySelector("#year");
let date = new Date().getFullYear();
year.innerText = date;

//*Navbar toggle

let Hamburger = document.querySelector("#Hamburger");
Hamburger.addEventListener("click", () => {
  document.querySelector("#Navbar").classList.toggle("md:w-full");
});

let closeNavbar = document.querySelector("#close");
closeNavbar.addEventListener("click", () => {
  document.querySelector("#Navbar").classList.remove("md:w-full");
});
