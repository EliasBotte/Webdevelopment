const setup = () => {
    let verjaardag = new Date(2002, 8, 1)
    let vandaag = new Date()
    console.log(Math.round((vandaag-verjaardag)/(24 * 60 * 60 * 1000)));
}
window.addEventListener("load", setup);