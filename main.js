/* ===== MOBILE MENU ===== */
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

/* ===== VISITOR COUNTER (GitHub Pages SAFE) ===== */
document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("visitorCount");

  if (!counter) return;

  fetch("https://api.countapi.xyz/hit/priyatham-rama-sai.github.io/visits")
    .then(res => res.json())
    .then(data => {
      counter.textContent = data.value;
    })
    .catch(() => {
      counter.textContent = "—";
    });
});
