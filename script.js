let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn2 = document.getElementById('nextBtn2');

// Function to show the current slide
function showSlide(slideNumber) {
  slides.forEach((slide, index) => {
    if (index === slideNumber) {
      slide.classList.add('show');
    } else {
      slide.classList.remove('show');
    }
  });
}

// Event listener for the "Click here" button (next slide)
nextBtn2.addEventListener('click', () => {
  currentSlide = 2; // Move to Slide 3 (index 2)
  showSlide(currentSlide);
  setTimeout(() => {
    currentSlide = 3; // Move to Slide 4 (index 3)
    showSlide(currentSlide);
  }, 2000);
});

// Initial slide load (First slide shows after 3 seconds)
window.onload = () => {
  showSlide(currentSlide);  // Show first slide
  setTimeout(() => {
    currentSlide = 1; // Move to Slide 2 (index 1)
    showSlide(currentSlide);
  }, 3000);
};
