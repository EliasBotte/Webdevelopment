const setup = () => {
    let jsonstring = '{"voornaam":"Jan","familienaam":"Appel","geboorteDatum":"1984-03-26T22:00:00.000Z","adres":{"straat":"Schoolstraat 30","postcode":"8500","gemeente":"Kortrijk"},"lievelingseten":"Spaghetti","bestevriend":"Alberto","huisdieren":["Pratende hond 1","kimpie"],"isIngeschreven":true,"namenVanExen":["Samson","Gert","Albert","Jeanine"],"aantalAutos":2}'
    let Student1 = JSON.parse(jsonstring)
    console.log(Student1)
    console.log(Student1.bestevriend);
    console.log(Student1.namenVanExen)
}
window.addEventListener("load", setup);