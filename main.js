/* ==========================
   MOBILE MENU TOGGLE
========================== */
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

/* ==========================
   VISITOR COUNTER (CountAPI)
========================== */
document.addEventListener("DOMContentLoaded", () => {
  const counterEl = document.getElementById("visitorCount");

  // Safety check
  if (!counterEl) return;

  // UNIQUE namespace + key (VERY IMPORTANT)
  const NAMESPACE = "priyatham-ramsai-portfolio";
  const KEY = "home-page-visits";

  fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`)
    .then(res => res.json())
    .then(data => {
      counterEl.textContent = data.value;
    })
    .catch(err => {
      console.error("Visitor counter error:", err);
      counterEl.textContent = "N/A";
    });
});
