document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // 1. Charger l'état enregistré au démarrage
  checkboxes.forEach((checkbox) => {
    const id = checkbox.getAttribute("data-id");
    const isChecked = localStorage.getItem(id) === "true";
    checkbox.checked = isChecked;

    // 2. Écouter les changements et sauvegarder dans le navigateur
    checkbox.addEventListener("change", (e) => {
      localStorage.setItem(id, e.target.checked);
    });
  });
});
