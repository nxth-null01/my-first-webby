const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-bar ul");
const resumeBtn = document.querySelector(".resume");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    resumeBtn.classList.toggle("show");
});
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
AOS.init({
    duration: 1000,  
    once: false,       
    offset: 120      
  });