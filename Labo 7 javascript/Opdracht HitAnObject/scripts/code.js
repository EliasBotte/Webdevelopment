let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};
const setup = () => {
    let startButton = document.getElementById("startButton");
    startButton.addEventListener("click", start)
}
const start = () => {
    document.getElementById("startButton").style.display = "none";
    let target = document.getElementById("target");
    target.addEventListener("click", klik);

    moveObject();
}
const klik = () => {
    let target = document.getElementById("target");
    if (target.getAttribute("src") === "images/0.png") {
        gameover();
    } else {
        correct();
    }
}

const gameover = () => {

    clearTimeout(global.timeoutId);
    alert("Git gud");
}

const correct = () => {
    let scorecount = document.getElementById("scorecount");
    let i = 0;
    clearTimeout(global.timeoutId);
    global.score++;
    scorecount.innerText = global.score;

    moveObject();
}
const moveObject = () => {
    let target = document.getElementById("target");
    let playField = document.getElementById("playField");
    let maxLeft = playField.clientWidth - global.IMAGE_SIZE;
    let maxHeight = playField.clientHeight - global.IMAGE_SIZE;

    let left = Math.floor(Math.random()*maxLeft);
    let top = Math.floor(Math.random()*maxHeight);
    target.style.left=left+"px";
    target.style.top=top+"px";
    changeObject();
    global.timeoutId = setTimeout(moveObject, global.MOVE_DELAY);
}

const changeObject = () => {
    let number = Math.floor(Math.random()*global.IMAGE_COUNT);
    let target = document.getElementById("target");
    target.setAttribute("src",global.IMAGE_PATH_PREFIX + number + global.IMAGE_PATH_SUFFIX);
}

window.addEventListener("load", setup);


