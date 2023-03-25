const setup = () => {
    let liNodes = document.querySelectorAll("li")
    for (let i=0;i<liNodes.length;i++){
        liNodes[i].setAttribute("class","listitem")
        liNodes[i].setAttribute("style", 'color: red')
    }
    let newImg = document.createElement("img")
    newImg.setAttribute("src","./images/me.jpg")
    liNodes[2].parentNode.parentNode.append(newImg)
}
window.addEventListener("load", setup);