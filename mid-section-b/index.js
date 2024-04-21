const sliderImages = document.querySelectorAll('.slider-image');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const thumbnails = document.querySelectorAll('.thumbnail');

let currentImageIndex = 0;

function showImage(index) {
  sliderImages.forEach((image, imageIndex) => {
    image.style.display = imageIndex === index ? 'block' : 'none';
  });
}

function nextImage() {
  currentImageIndex++;
  currentImageIndex = currentImageIndex % sliderImages.length;
  showImage(currentImageIndex);
  activateThumbnail(currentImageIndex);
}

function prevImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = sliderImages.length - 1;
  }
  showImage(currentImageIndex);
  activateThumbnail(currentImageIndex);
}

function activateThumbnail(index) {
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove('active');
  });
  thumbnails[index].classList.add('active');
}

showImage(currentImageIndex);
activateThumbnail(currentImageIndex);

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    currentImageIndex = index;
    showImage(currentImageIndex);
    activateThumbnail(currentImageIndex);
  });
})