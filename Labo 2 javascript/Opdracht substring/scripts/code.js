const setup = () => {
    let substringbutton=document.getElementById("substringbutton");

    substringbutton.addEventListener("click", substring);
}
const substring = () => {
    let eerstegrens = document.getElementById("eerstegrens");
    let tweedegrens = document.getElementById("tweedegrens");
    let txtInput = document.getElementById("txtInput");
    let result = txtInput.substring(eerstegrens, tweedegrens);
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.innerHTML = result;
}
window.addEventListener("load", setup);