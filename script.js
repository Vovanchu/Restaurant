// script.js
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-img');

function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Автоматична зміна слайдів через 3 секунди
setInterval(() => {
    nextSlide();
}, 15000);

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

