document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Countdown Timer
  function updateCountdown() {
    const confDate = new Date("November 15, 2025 09:00:00").getTime();
    const now = new Date().getTime();
    const gap = confDate - now;

    const d = Math.floor(gap / (1000 * 60 * 60 * 24));
    const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((gap % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${d}d ${h}h ${m}m ${s}s`;
  }
  setInterval(updateCountdown, 1000);

  // Registration Form
  document.getElementById('registration-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    alert(`Thank you, ${name}! Your registration has been received. Payment instructions will be emailed to you.`);
    this.reset();
  });
});
