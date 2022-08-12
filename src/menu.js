const hamburger = document.getElementById("hamburger");
const navigation = document.getElementById("navigation");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navigation.classList.toggle("active");
  overlay.classList.toggle("overlayActive");
});

overlay.addEventListener("click", () => {
  overlay.classList.toggle("overlayActive");
  hamburger.classList.toggle("active");
});
