const setup = () => {
    console.log(familieleden[0])
    console.log(familieleden[2])
    console.log(familieleden[4])
    console.log(familieleden.length)
    VoegNaamToe();
    console.log(familieleden)
    console.log(familieleden.toString());
}
let familieleden = ["Aaron", "Bram", "Charlie", "Dan", "Ester"];

const VoegNaamToe = () => {
    let new_name = prompt("Geef een nieuwe naam op")
    familieleden.push(new_name);
}
window.addEventListener("load", setup);