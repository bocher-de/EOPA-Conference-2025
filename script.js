document.getElementById('reg-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  // Use a free service like Formspree or Google Forms to collect data
  alert("Thank you! Registration details sent.");
  e.target.reset();
});
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

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 90,
          behavior: 'smooth'
        });
      }
    });
  });
});


