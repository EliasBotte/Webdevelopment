const setup = () => {
let generateButton = document.getElementById("generateButton");
    generateButton.addEventListener("click", generateTrigrams);
}
const generateTrigrams = () => {
    let inputText = document.getElementById("inputText");
    let text = inputText.value;
    let output = [];
    let trigram;
    for (let i= 0; i<text.length-2; i++){
        trigram = text.slice(i, i+3);
        output.push(trigram);
    }
    console.log(output)
}
window.addEventListener("load", setup);