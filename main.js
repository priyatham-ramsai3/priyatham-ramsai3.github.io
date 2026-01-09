/* ============================
   MOBILE MENU TOGGLE
============================ */
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu) {
    menu.classList.toggle("show");
  }
}

/* ============================
   VISITOR COUNTER (ANIMATED)
   Uses CountAPI – GitHub Pages safe
============================ */
document.addEventListener("DOMContentLoaded", () => {
  const counterElement = document.getElementById("visitorCount");
  if (!counterElement) return; // run only if counter exists

  const counterURL = "https://api.countapi.xyz/hit/priyatham-portfolio/visits";

  fetch(counterURL)
    .then(response => response.json())
    .then(data => animateCounter(data.value))
    .catch(() => {
      counterElement.innerText = "—";
    });

  function animateCounter(target) {
    let count = 0;
    const duration = 1200; // animation duration (ms)
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      count = Math.floor(progress * target);
      counterElement.innerText = count.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }
});
