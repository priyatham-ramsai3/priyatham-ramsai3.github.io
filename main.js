/* ==========================
   MOBILE MENU
========================== */
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

/* ==========================
   LOCAL VISITOR COUNTER
========================== */
document.addEventListener("DOMContentLoaded", () => {
  const counterEl = document.getElementById("visitorCount");
  if (!counterEl) return;

  let visits = localStorage.getItem("prs_visits");

  if (!visits) {
    visits = 1;
  } else {
    visits = parseInt(visits) + 1;
  }

  localStorage.setItem("prs_visits", visits);
  counterEl.textContent = visits;
});
