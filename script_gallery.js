  const slider = document.querySelector('.slider');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const slideWidth = document.querySelector('.slide').clientWidth;

  let slideIndex = 0;

  function showSlide(index) {
    if (index < 0) {
      index = slider.children.length - 3;
    } else if (index >= slider.children.length - 2) {
      index = 0;
    }

    slider.style.transform = `translateX(-${slideWidth * index}px)`;
    slideIndex = index;
  }

  prevBtn.addEventListener('click', () => {
    showSlide(slideIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    showSlide(slideIndex + 1);
  });