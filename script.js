document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    const id = checkbox.getAttribute("data-id");
    
    // Charger la mémoire
    checkbox.checked = localStorage.getItem(id) === "true";

    // Enregistrer le clic
    checkbox.addEventListener("change", (e) => {
      localStorage.setItem(id, e.target.checked);
    });
  });
});
