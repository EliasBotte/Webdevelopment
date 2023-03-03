const setup = () => {
    let pbelangrijk = document.getElementsByClassName("belangrijk")
    for (let i = 0; i < pbelangrijk.length; i++) {
        pbelangrijk[i].className = 'belangrijk opvallend';
    }
}

window.addEventListener("load", setup);