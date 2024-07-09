//for section smoothness selection 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// card js

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      card.addEventListener("click", function () {
        alert(`You clicked on ${card.querySelector("h3").innerText}`);
      });
    });
  });


//automatically change slider js

const images = ["./img/logo.png","./img/blouse1.jpg","./img/kids1.jpg"];
let currentIndex = 0;
const slider = document.getElementById("slider");

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slider.src = images[currentIndex];
}

setInterval(changeImage, 3000);


