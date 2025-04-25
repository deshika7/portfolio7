// Dark mode toggle
document.getElementById('dark-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  // Smooth scroll for nav (optional enhancement)
  document.querySelectorAll('a[href^=\"#\"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  