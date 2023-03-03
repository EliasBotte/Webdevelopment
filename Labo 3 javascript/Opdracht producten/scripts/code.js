const setup = () => {
    console.log ("setup");
    let herberekenButton = document.getElementsByClassName('herberekenButton')[0];
    herberekenButton.addEventListener("click", herbereken);

    herbereken();
};

const herbereken = () => {

    let btws = document.getElementsByClassName('btw');
    let aantallen = document.getElementsByClassName('aantal');
    let prijzen = document.getElementsByClassName('prijs');
    let subtotalen = document.getElementsByClassName('subtotaal');
    let totaal=document.getElementsByClassName('totaal')[0];
    let Totaal = 0;

    for (let i = 0; i < btws.length; i++) {
        let btw=parseFloat(btws[i].innerHTML, 10);
        let aantal=parseFloat(aantallen[i].value, 10);
        let prijs=parseFloat(prijzen[i].innerHTML, 10);
        let subtotaal=prijs*aantal*(1+(btw/100));
        Totaal+=subtotaal;

        subtotalen[i].textContent=subtotaal.toFixed(2) + " Eur";
    }
    totaal.textContent=Totaal.toFixed(2) + " Eur";
};

window.addEventListener("load", setup);

