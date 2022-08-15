const hamburger = document.getElementById("hamburger");
const navigation = document.getElementById("navigation");
const overlay = document.getElementById("overlay");
const overlay2 = document.getElementById("overlay2");
const menuBar=document.getElementById("menu-bar");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navigation.classList.toggle("active");
  overlay.classList.toggle("overlayActive");
});

overlay.addEventListener("click", () => {
  overlay.classList.toggle("overlayActive");
  hamburger.classList.toggle("active");
});

