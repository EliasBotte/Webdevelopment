const setup = () => {
    submitbutton = document.getElementById("submit")
    submitbutton.addEventListener("click", addspaces )

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
window.addEventListener("load", setup);