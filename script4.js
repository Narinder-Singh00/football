let currentIndex = 1; // Start with the middle player (index 1)

function moveSlide(direction) {
    const slides = document.querySelectorAll('.player-slide');
    const track = document.getElementById('playerTrack');
    
    // Remove active class from current
    slides[currentIndex].classList.remove('active');
    
    // Update index
    currentIndex += direction;
    
    // Boundary check
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex >= slides.length) currentIndex = slides.length - 1;
    
    // Add active class to new center
    slides[currentIndex].classList.add('active');
    
    // Calculate movement (shift by 33.33% per slide)
    // We offset by (1 - currentIndex) * 33.33 to keep the active one centered
    const offset = (1 - currentIndex) * 33.33;
    track.style.transform = `translateX(${offset}%)`;
}

function updateSlider() {
    const slides = document.querySelectorAll('.player-slide');
    const track = document.getElementById('playerTrack');
    const isMobile = window.innerWidth <= 768;
    
    // Determine percentage shift based on screen size
    const slideWidth = isMobile ? 100 : 33.33;
    const centerOffset = isMobile ? 0 : slideWidth; 

    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentIndex) {
            slide.classList.add('active');
        }
    });

    // Calculate the translation to keep the active slide in the center
    const offset = (isMobile ? -currentIndex * 100 : (1 - currentIndex) * 33.33);
    track.style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    const slides = document.querySelectorAll('.player-slide');
    currentIndex += direction;

    // Loop back to start/end instead of stopping
    if (currentIndex < 0) currentIndex = slides.length - 1;
    if (currentIndex >= slides.length) currentIndex = 0;

    updateSlider();
}

// Add click-to-select functionality
document.querySelectorAll('.player-slide').forEach((slide, index) => {
    slide.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

// Initial call to set positions
updateSlider();

// Update on resize to handle mobile/desktop switch
window.addEventListener('resize', updateSlider);