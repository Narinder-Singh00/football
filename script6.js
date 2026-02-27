document.addEventListener("DOMContentLoaded", () => {
    const badgeText = document.querySelector(".badge-text");
    const text = "CONTACT US • CONTACT US • "; // The text you want to rotate
    const characters = text.split("");
    const degreeStep = 360 / characters.length;

    // Clear existing text
    badgeText.innerHTML = "";

    // Create spans for each character and rotate them
    characters.forEach((char, i) => {
        const span = document.createElement("span");
        span.innerText = char;
        span.style.position = "absolute";
        span.style.left = "50%";
        span.style.top = "0";
        span.style.transformOrigin = "0 50px"; // Adjust based on badge height (50px = half of 100px)
        span.style.transform = `translateX(-50%) rotate(${i * degreeStep}deg)`;
        badgeText.appendChild(span);
    });
});