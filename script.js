// script.js
// Отримуємо елементи каруселі
var carousel = document.querySelector('.carousel');
var carouselItems = carousel.querySelectorAll('.carousel-item');

// Додаємо слухачів подій на кнопки перемикання
document.querySelector('.carousel-control-prev').addEventListener('click', function() {
  moveCarousel(-1);
});

document.querySelector('.carousel-control-next').addEventListener('click', function() {
  moveCarousel(1);
});

// Функція переміщення каруселі
function moveCarousel(direction) {
  var currentSlide = carousel.querySelector('.active');
  var nextSlide;

  if (direction === -1) {
    nextSlide = currentSlide.previousElementSibling || carouselItems[carouselItems.length - 1];
  } else {
    nextSlide = currentSlide.nextElementSibling || carouselItems[0];
  }

  currentSlide.classList.remove('active');
  nextSlide.classList.add('active');
}

// Додамо автоматичну зміну слайдів
var intervalId = setInterval(function() {
  moveCarousel(1); 
}, 5000); 

// Зупиняємо автоматичну зміну слайдів при наведенні курсора на карусель
carousel.addEventListener('mouseover', function() {
  clearInterval(intervalId);
});

// Поновлюємо автоматичну зміну слайдів при відведенні курсора від каруселі
carousel.addEventListener('mouseleave', function() {
  intervalId = setInterval(function() {
    moveCarousel(1); 
  }, 5000); 
});


/*Copy password*/
document.getElementById("wifiPassword").addEventListener("click", function() {
    var password = this.innerText;
    navigator.clipboard.writeText(password).then(function() {
        console.log("Wi-Fi password copied to clipboard");
        alert("Wi-Fi password copied to clipboard: " + password);
    }, function(err) {
        console.error("Failed to copy Wi-Fi password: ", err);
        alert("Failed to copy Wi-Fi password. Please try again.");
    });
});


/*Email*/
document.getElementById("emailLink").addEventListener("click", function() {
    var emailAddress = this.innerText;
    // Створюємо посилання для відправки листа
    var mailtoLink = "mailto:" + emailAddress;
    // Відкриваємо посилання в новому вікні
    window.open(mailtoLink, '_blank');
});
