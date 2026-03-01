// Simple fade-in animation on scroll
const cards = document.querySelectorAll(".yt-card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 50) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease";
});
const popup = document.querySelector(".yt-popup");
const player = document.getElementById("yt-player");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const videoId = card.getAttribute("data-video");

        // Stop any existing video first
        player.src = "";

        // Set new video
        player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

        popup.classList.add("active");
    });
});

// Close popup when clicking outside video
popup.addEventListener("click", (e) => {
    if (!e.target.closest(".yt-popup-content")) {
        popup.classList.remove("active");
        player.src = ""; // Stop video completely
    }
});