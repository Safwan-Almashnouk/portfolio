let slideIndex = 0;
let slideInterval; // Store the interval reference

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Function to start automatic slideshow
function startAutoSlides() {
  slideInterval = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 10000);
}

// Next/Previous controls
function plusSlides(n) {
  clearInterval(slideInterval); // Stop auto sliding
  slideIndex += n;
  showSlides(slideIndex);
  startAutoSlides(); // Restart auto sliding
}

// Thumbnail controls
function currentSlide(n) {
  clearInterval(slideInterval);
  slideIndex = n;
  showSlides(slideIndex);
  startAutoSlides();
}

// Initialize slideshow
slideIndex = 1;
showSlides(slideIndex);
startAutoSlides();
