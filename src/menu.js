const hamburger = document.getElementById("hamburger");
const navigation = document.getElementById("navigation");
const overlay = document.getElementById("overlay");
const overlay2 = document.getElementById("overlay2");
const offerButton = document.getElementById("offerButton");
const offerButtonMenu = document.getElementById("offerButtonMenu");
const galleryButton = document.getElementById("galleryButton");
const galleryButtonMenu = document.getElementById("galleryButtonMenu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navigation.classList.toggle("active");
  overlay.classList.toggle("overlayActive");
});

overlay.addEventListener("click", () => {
  overlay.classList.toggle("overlayActive");
  hamburger.classList.toggle("active");
});
offerButton?.addEventListener("click", ()=> {
  offerButtonMenu.classList.toggle("mobile-submenu-offer")
  console.log("test")
})
galleryButton?.addEventListener("click", ()=> {
  galleryButtonMenu.classList.toggle("mobile-submenu-offer")
  console.log("test")
})



