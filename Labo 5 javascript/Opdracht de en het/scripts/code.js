const setup = () => {
    let replace = document.getElementById("replace");
    replace.addEventListener("click", replaceDeWithHet);
}
const replaceDeWithHet = () => {
    let inputText = document.getElementById("inputText");
    let text = inputText.value;
    let id = text.indexOf("de");
    while (id !== -1){
        let beforeText = text.slice(0, id);
        let afterText = text.slice(id+"het".length, text.length);
        text = beforeText + "het " + afterText;
        id=text.indexOf("de", id+"het".length);
    }
    console.log(text)
}
window.addEventListener("load", setup);