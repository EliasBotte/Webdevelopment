const setup = () => {
    let pnode = document.querySelectorAll("p")
    pnode[0].innerText= "Good Job!"
}
window.addEventListener("load", setup);