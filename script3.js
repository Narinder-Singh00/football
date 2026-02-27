// Function to animate the numbers
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-item h2');
    
    stats.forEach(stat => {
        const target = parseInt(stat.innerText.replace(/\D/g, ''));
        const suffix = stat.innerText.replace(/[0-9]/g, ''); // Keeps the '+' or 'K'
        let count = 0;
        const speed = 2000 / target; // Adjust speed here

        const updateCount = () => {
            if (count < target) {
                count++;
                stat.innerText = count + suffix;
                setTimeout(updateCount, speed);
            } else {
                stat.innerText = target + suffix;
            }
        };
        updateCount();
    });
};

// Intersection Observer to trigger animation when visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.lions-stats'));