var slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  var slides = document.getElementsByClassName("slide");

  // Wrap around to the first slide if reaching the end
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }

  // Show the current slide
  slides[slideIndex - 1].style.opacity = 1;
}