let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

// Show the image at the current index
function showImage(index) {
    const offset = -index * 100; // Calculate the offset to show the correct image
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

// Show the next image
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
}

// Show the previous image
function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(currentImageIndex);
}

// Automatically change the image every 5 seconds
setInterval(showNextImage, 5000);

// Initialize the carousel to show the first image
showImage(currentImageIndex);
