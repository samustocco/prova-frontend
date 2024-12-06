// Oggetto con le attività disponibili per ogni fascia di età
const activitiesByAgeGroup = {
  Fascia1: ["3. Regolegalità", "6. Miele e Api"],
  Fascia2: ["1. Storia della cascina Carla e Bruno Caccia", "2. Bruno Caccia", "3. Regolegalità", "6. Miele e Api", "9. Il gioco non è un azzardo"],
  Fascia3: [
    "1. Storia della cascina Carla e Bruno Caccia",
    "2. Bruno Caccia",
    "4. I beni confiscati",
    "5. Le mafie e il cibo",
    "6. Miele e Api",
    "7. Ricicliamo attività artistiche e manuali",
    "8. La mafia attraverso il cinema: percezioni culturali",
    "9. Il gioco non è un azzardo",
  ],
  Fascia4: [
    "1. Storia della cascina Carla e Bruno Caccia",
    "2. Bruno Caccia",
    "4. I beni confiscati",
    "5. Le mafie e il cibo",
    "6. Miele e Api",
    "7. Ricicliamo attività artistiche e manuali",
    "8. La mafia attraverso il cinema: percezioni culturali",
    "10. Chi non gioca vince",
  ],
};

// Riferimenti agli elementi del DOM
const ageGroupSelect = document.getElementById("ageGroup"); // Prendi il select della fascia di età
const activitiesContainer = document.getElementById("activitiesContainer");

// Funzione per aggiornare le attività in base alla fascia di età selezionata
function updateActivities() {
  const selectedAgeGroup = ageGroupSelect.value; // Accedi al valore selezionato dalla fascia di età

  // Svuota il contenitore delle attività
  activitiesContainer.innerHTML = "";

  // Verifica se esistono attività per la fascia di età selezionata accedendo all'array
  if (activitiesByAgeGroup[`Fascia${selectedAgeGroup}`]) {
    // Crea una checkbox per ogni attività
    activitiesByAgeGroup[`Fascia${selectedAgeGroup}`].forEach((activity) => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = activity.replace(/\s+/g, "-"); // Rimuove gli spazi per creare un ID valido
      checkbox.name = "activities";
      checkbox.value = activity;

      const label = document.createElement("label");
      label.htmlFor = checkbox.id;
      label.textContent = activity;

      const container = document.createElement("div");
      container.appendChild(checkbox);
      container.appendChild(label);

      activitiesContainer.appendChild(container);
    });
  } else {
    // Se nessuna fascia di età è selezionata, mostra un messaggio o lascia vuoto
    activitiesContainer.innerHTML = "<p>Seleziona una fascia di età per vedere le attività disponibili.</p>";
  }
}

// Aggiunge le attività disponibili in base alla selezione della fascia di età
ageGroupSelect.addEventListener("change", updateActivities);

// Esegui subito la funzione per aggiornare le attività al caricamento della pagina
updateActivities();
