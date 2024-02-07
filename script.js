document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    let currentIndex = 0;
    const images = carousel.querySelectorAll('.product');
    const totalImages = images.length;
    const width = images[0].clientWidth;

    carousel.style.width = `${width * totalImages}px`;

    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalImages;
      carousel.style.transform = `translateX(-${currentIndex * width}px)`;
    }, 3000); // Change image every 3 seconds
  });
});
