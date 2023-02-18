const setup = () => {
    let wijzigbutton =document.getElementById("wijzigbutton");
    wijzigbutton.addEventListener("click", wijzigtekst)
}
const wijzigtekst = () => {
    let pElement =document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);