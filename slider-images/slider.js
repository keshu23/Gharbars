function autoSlide() {
    var currentImage = document.querySelector('.slider img.active');
    var nextImage = currentImage.nextElementSibling;
  
    if (nextImage) {
      currentImage.classList.remove('active');
      nextImage.classList.add('active');
    } else {
      var firstImage = document.querySelector('.slider img:first-child');
      firstImage.classList.add('active');
    }
  }
  
  // Call the autoSlide() function every 5 seconds
  setInterval(autoSlide, 5000);
  