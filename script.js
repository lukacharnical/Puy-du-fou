document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll('.show-item');

  items.forEach((item) => {
    const doneCheck = item.querySelector('.done input');
    const missedCheck = item.querySelector('.missed input');

    if (doneCheck && missedCheck) {
      const idDone = doneCheck.getAttribute("data-id");
      const idMissed = missedCheck.getAttribute("data-id");

      // Charger l'état sauvegardé
      doneCheck.checked = localStorage.getItem(idDone) === "true";
      missedCheck.checked = localStorage.getItem(idMissed) === "true";

      // Quand on coche "Fait"
      doneCheck.addEventListener("change", () => {
        if (doneCheck.checked) {
          missedCheck.checked = false;
          localStorage.setItem(idMissed, "false");
        }
        localStorage.setItem(idDone, doneCheck.checked);
      });

      // Quand on coche "Pas fait"
      missedCheck.addEventListener("change", () => {
        if (missedCheck.checked) {
          doneCheck.checked = false;
          localStorage.setItem(idDone, "false");
        }
        localStorage.setItem(idMissed, missedCheck.checked);
      });
    }
  });
});
