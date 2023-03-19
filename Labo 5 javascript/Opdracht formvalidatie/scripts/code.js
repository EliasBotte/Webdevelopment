const setup = () => {
    let btnValideer=document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
    valideerVoornaam();
    valideerFamilienaam();
    valideerGeboorteDatum();
    valideerEmail();
    valideerAantalKinderen();
    let elements = document.getElementsByClassName("invalid");
    if (elements.length===0) {
        window.alert("proficiat!");
    }
};

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let voornaam = txtVoornaam.value.trim();

    if (voornaam.length > 30) {
        reportError(txtVoornaam, "max. 30 karakters");
    } else {
        clearError(txtVoornaam);
    }
};

const valideerFamilienaam = () => {
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let familienaam = txtFamilienaam.value.trim();

    if (familienaam.length === 0) {
        reportError(txtFamilienaam, "verplicht veld");
    } else if (familienaam.length > 50) {
        reportError(txtFamilienaam, "max. 50 karakters");
    } else {
        clearError(txtFamilienaam);
    }
};

const valideerGeboorteDatum = () => {
    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    let geboorteDatum = txtGeboorteDatum.value.trim();

    if (geboorteDatum.length!==10) {
        reportError(txtGeboorteDatum, "verplicht veld in formaat jjjj-mm-dd");
    } else {
        let formatCorrect=true;
        if (formatCorrect && !(geboorteDatum.charAt(4)==='-' && geboorteDatum.charAt(7)==='-') ) {
            formatCorrect=false;
        }
        if (formatCorrect) {
            let yearText=geboorteDatum.substring(0,4);
            if (!isPositiveNonZeroNumber(yearText)) {
                formatCorrect=false;
            }
        }
        if (formatCorrect) {
            let monthText=geboorteDatum.substring(5,7);
            if (!isPositiveNonZeroNumber(monthText)) {
                formatCorrect=false;
            }
        }
        if (formatCorrect) {
            let dayText=geboorteDatum.substring(8,11);
            if (!isPositiveNonZeroNumber(dayText)) {
                formatCorrect=false;
            }
        }
        if (formatCorrect) {
            clearError(txtGeboorteDatum);
        } else {
            reportError(txtGeboorteDatum, "formaat is niet jjjj-mm-dd");
        }
    }
};

const valideerEmail = () => {
    let txtEmail = document.getElementById("txtEmail");
    let email = txtEmail.value.trim();

    if (email.length===0) {
        reportError(txtEmail, "verplicht veld");
    } else {
        let formatCorrect=true;
        let id=email.indexOf("@");

        if (id<1 || id===email.length-1) {
            formatCorrect=false;
        }
        id=email.indexOf("@", id+1);
        if (formatCorrect && id!==-1) {
            formatCorrect=false;
        }
        if (formatCorrect) {
            clearError(txtEmail);
        } else {
            reportError(txtEmail, "geen geldig email adres");
        }
    }
};

const valideerAantalKinderen = () => {
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    let aantalKinderenText = txtAantalKinderen.value.trim();
    if (!isPositiveNumber(aantalKinderenText))
    {
        reportError(txtAantalKinderen, "is geen positief getal");
    }
    else if (aantalKinderenText.length===0) {
        reportError(txtAantalKinderen, "verplicht veld");

    } else {
        let aantal=parseInt(aantalKinderenText);

        if (aantal>=99) {
            reportError(txtAantalKinderen, "te vruchtbaar");
        } else {
            clearError(txtAantalKinderen);
        }
    }
};

const isPositiveNumber = (text) => {

    if (isNaN(text)) {
        return false;
    } else {
        let number = parseInt(text, 10);
        return number >= 0;
    }
};

const isPositiveNonZeroNumber = (text) => {

    if (isNaN(text)) {
        return false;
    } else {
        let number = parseInt(text, 10);
        return number > 0;
    }
};

const reportError = (element, message) => {
    let elementId=element.getAttribute("id");

    let errorElementId= "err"+elementId.substring(3, elementId.length);
    let error= document.getElementById(errorElementId);
    element.className="invalid";
    error.innerHTML = message;
};

const clearError = (element) => {
    let elementId= element.getAttribute("id");

    let errorElementId="err"+elementId.substring(3, elementId.length);
    let error= document.getElementById(errorElementId);
    element.className="";
    error.innerHTML = "";
};
window.addEventListener("load", setup);