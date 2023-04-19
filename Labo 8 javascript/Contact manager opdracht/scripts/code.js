let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht

const vulPersoonMetGegevensVanFormulier = (persoon) => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    persoon.voornaam = txtVoornaam.value;

    let txtFamilienaam = document.getElementById("txtFamilienaam");
    persoon.familienaam = txtFamilienaam.value;

    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    persoon.geboorteDatum = new Date(txtGeboorteDatum.value);

    let txtEmail = document.getElementById("txtEmail");
    persoon.email = txtEmail.value;

    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    persoon.aantalKinderen = parseInt(txtAantalKinderen.value);
};

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    let elements = document.getElementsByClassName("invalid");
    let lstPersonen = document.getElementById("lstPersonen");
    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();
    // indien ok, bewaar de ingegeven data.
    if (elements.length === 0){
        let persoon = {};
        if (lstPersonen.selectedIndex === -1) {
            // een nieuw aangemaakte persoon voegen we toe
            vulPersoonMetGegevensVanFormulier(persoon);
            personen.push(persoon);
            let option = document.createElement("option");
            // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
            option.innerHTML = persoon.voornaam + " " + persoon.familienaam;
            lstPersonen.appendChild(option);
            lstPersonen.selectedIndex = personen.length - 1;
            // een bestaande persoon in de lijst passen we aan
        } else {
            persoon = personen[lstPersonen.selectedIndex];
            vulPersoonMetGegevensVanFormulier(persoon);
            let option = lstPersonen.options[lstPersonen.selectedIndex];
            // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
            option.innerHTML = persoon.voornaam + " " + persoon.familienaam;
        }
    }



};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let lstPersonen = document.getElementById("lstPersonen");
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    let txtEmail = document.getElementById("txtEmail");
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
// Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    lstPersonen.selectedIndex = -1;
    txtVoornaam.value = "";
    txtFamilienaam.value = "";
    txtGeboorteDatum.value = "";
    txtEmail.value = "";
    txtAantalKinderen.value = "";


};
const VeranderInterfaceNaarGeselecteerdePersoon = (persoon) => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    txtVoornaam.value = persoon.voornaam;

    let txtFamilienaam = document.getElementById("txtFamilienaam");
    txtFamilienaam.value = persoon.familienaam;

    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    txtGeboorteDatum.value = persoon.geboorteDatum.toISOString().substring(0, 10);

    let txtEmail = document.getElementById("txtEmail");
    txtEmail.value = persoon.email;

    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    txtAantalKinderen.value = persoon.aantalKinderen
};

const bewerkgeselecteerdePersoon = (selected) => {
    let index = selected.target.selectedIndex;
    let persoon = personen[index];
    VeranderInterfaceNaarGeselecteerdePersoon(persoon);
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", bewerkgeselecteerdePersoon)
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);