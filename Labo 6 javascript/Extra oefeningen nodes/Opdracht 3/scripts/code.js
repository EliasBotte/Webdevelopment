const setup = () => {
    let myDIV = document.getElementById("myDIV")
    myDIV.addEventListener("click", createpElement)
}
const createpElement = () => {
    let newp = document.createElement("p")
    newp.innerText = "some text"
    myDIV.appendChild(newp)
}
window.addEventListener("load", setup);