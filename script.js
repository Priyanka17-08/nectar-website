let images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg"
];

let index = 0;
let heroImg = document.getElementById("hero-img");

if (heroImg) {
  setInterval(() => {
    index = (index + 1) % images.length;
    heroImg.style.opacity = 0;

    setTimeout(() => {
      heroImg.src = images[index];
      heroImg.style.opacity = 1;
    }, 300);
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  const zigzagImages = document.querySelectorAll(".zigzag-item img");
  const animations = [
    "anim-zoom",
    "anim-bounce",
    "anim-rotate",
    "anim-pulse",
    "anim-shake",
    "anim-flip",
    "anim-wobble",
    "anim-squeeze"
  ];
  
  let count = 0;
  zigzagImages.forEach((img) => {
    if (img.id !== "menuModalImg") {
      img.classList.add(animations[count % animations.length]);
      count++;
    }
  });
});
function filterMenu(type) {
  const items = document.querySelectorAll('.menu-card');

  items.forEach(item => {
    if (type === 'all' || item.classList.contains(type)) {
      item.style.display = "block";
      item.style.opacity = "1";
    } else {
      item.style.display = "none";
    }
  });
}

function openMenu(imagePath) {
  document.getElementById("menuModalImg").src = imagePath;
  document.getElementById("menuModal").style.display = "flex";
}

function closeMenu() {
  document.getElementById("menuModal").style.display = "none";
}


