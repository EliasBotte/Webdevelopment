const setup = () => {
    submitbutton = document.getElementById("submit")
    submitbutton.addEventListener("click", addspaces )
    var text =document.getElementById("text");

}
const addspaces = () => {
    var text =document.getElementById("text");
    text = text.value;
    let result="";

    for (let i=0;i<text.length;i++) {
        result+=text.charAt(i);
        result+=" ";
    }
    console.log(result);
}

const maakMetSpaties = (text) => {
    let result="";
    for (let i=0;i<text.length;i++) {
        result+=text.charAt(i);
        result+=" ";
    }
    return result;
};

window.addEventListener("load", setup);