const setup = () => {
    let toonResultaatButton = document.getElementById("toonResultaatButton");
    toonResultaatButton.addEventListener("click", toon);
};

const toon = () => {
    let IsRoker=document.getElementById("IsRoker");
    if (IsRoker.checked) {
        console.log("is roker");
    } else {
        console.log("is geen roker");
    }

    let MoedertaalButton=document.getElementsByName("Moedertaal");
    for (let i=0;i<MoedertaalButton.length;i++) {
        if (MoedertaalButton[i].checked) {
            console.log("moedertaal is "+MoedertaalButton[i].value);
        }
    }

    let FavorieteBuurland=document.getElementById("FavoBuurland");
    let selectedIndex=FavoBuurland.selectedIndex;
    let option=FavoBuurland.options[selectedIndex];
    console.log("favoriete buurland is "+ option.text);


    let Bestelling=document.getElementById("Bestelling");
    let text="bestelling bestaat uit ";
    for (let i=0;i<Bestelling.options.length; i++) {
        option=Bestelling.options[i];
        if (option.selected) {
            text+=option.text+" ";
        }
    }
    console.log(text);

}
window.addEventListener("load", setup);