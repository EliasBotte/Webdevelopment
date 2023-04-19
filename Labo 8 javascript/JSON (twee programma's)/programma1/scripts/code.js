const setup = () => {
    let student1={
        voornaam : "Jan",
        familienaam : "Appel",
        geboorteDatum : new Date("1984-3-27"),
        adres : { // een object
            straat : "Schoolstraat 30",
            postcode : "8500",
            gemeente : "Kortrijk"
        },
        lievelingseten : "Spaghetti",
        bestevriend: "Alberto",
        huisdieren: ["Pratende hond 1", "kimpie"],
        isIngeschreven : true,
        namenVanExen : ["Samson", "Gert", "Albert", "Jeanine"], // een array
        aantalAutos : 2
    }
    let tekst = JSON.stringify(student1);
    console.log(tekst)
}
window.addEventListener("load", setup);