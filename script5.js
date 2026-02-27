document.querySelectorAll('.facility-card').forEach(card => {
  card.addEventListener('click', () => {
    // Remove active class from others
    document.querySelectorAll('.facility-card').forEach(c => c.classList.remove('active'));
    // Add to clicked
    card.classList.add('active');
  });
});