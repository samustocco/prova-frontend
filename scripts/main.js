const nomeCognomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ'-]{1,50}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const gradoScuolaRegex = /^(Primaria|Secondaria|Liceo|Università)$/;
const flagAttivitàRegex = /^(Sport|Musica|Arte)$/;
const considerazioniRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9.,'!?() \n-]{0,500}$/;


if (!nomeCognomeRegex.test(formData.nome)) {
    console.error("Nome non valido!");
}
if (!nomeCognomeRegex.test(formData.cognome)) {
    console.error("Cognome non valido!");
}
if (!emailRegex.test(formData.email)) {
    console.error("Email non valida!");
}
if (!gradoScuolaRegex.test(formData.gradoScuola)) {
    console.error("Grado scuola non valido!");
}
if (!flagAttivitàRegex.test(formData.flagAttività)) {
    console.error("Attività non valida!");
}
if (!considerazioniRegex.test(formData.considerazioni)) {
    console.error("Considerazioni non valide!");
}

/* git fetch origin
git checkout 2-regexform1
 */