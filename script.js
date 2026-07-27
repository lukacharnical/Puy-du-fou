document.addEventListener("DOMContentLoaded", () => {
  // Sélectionne toutes les cases à cocher de la page
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    const id = checkbox.getAttribute("data-id");
    
    // Vérifie si un attribut data-id existe pour éviter les erreurs
    if (id) {
      // Charger l'état sauvegardé depuis le navigateur
      checkbox.checked = localStorage.getItem(id) === "true";

      // Enregistrer le nouvel état du clic dans le navigateur
      checkbox.addEventListener("change", (e) => {
        localStorage.setItem(id, e.target.checked);
      });
    }
  });
});
