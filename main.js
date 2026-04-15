/* ==========================
   MOBILE MENU
========================== */
function toggleMenu() {
  const menu = document.getElementById("menu");
  const btn = document.getElementById("menuToggle");
  if (!menu) return;
  menu.classList.toggle("show");
  const open = menu.classList.contains("show");
  if (btn) {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  if (menu) {
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("show");
        const btn = document.getElementById("menuToggle");
        if (btn) {
          btn.setAttribute("aria-expanded", "false");
          btn.setAttribute("aria-label", "Open menu");
        }
      });
    });
  }

  const counterEl = document.getElementById("visitorCount");
  if (counterEl) {
    let visits = localStorage.getItem("prs_visits");
    if (!visits) {
      visits = 1;
    } else {
      visits = parseInt(visits, 10) + 1;
    }
    localStorage.setItem("prs_visits", String(visits));
    counterEl.textContent = visits;
  }
});
