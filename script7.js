// Extract YouTube ID
function getYouTubeID(url) {
  const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

// Set Thumbnails Automatically
document.querySelectorAll(".slide, .video-card")
.forEach(el => {
  let url = el.getAttribute("data-video");
  let videoID = getYouTubeID(url);

  if(videoID){
    let thumbnail = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
    el.style.backgroundImage = `url(${thumbnail})`;
    el.style.backgroundSize = "cover";
    el.style.backgroundPosition = "center";
  }
});

// AUTO SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 5000);

// MODAL OPEN 75%
const modal = document.querySelector(".video-modal");
const modalVideo = document.getElementById("modal-video");

document.querySelectorAll(".slide, .video-card")
.forEach(el => {
  el.addEventListener("click", () => {
    let url = el.getAttribute("data-video");
    let videoID = getYouTubeID(url);

    modal.classList.add("active");
    modalVideo.src = `https://www.youtube.com/embed/${videoID}?autoplay=1`;
  });
});

// CLOSE
document.querySelector(".close-modal")
.addEventListener("click", () => {
  modal.classList.remove("active");
  modalVideo.src = "";
});