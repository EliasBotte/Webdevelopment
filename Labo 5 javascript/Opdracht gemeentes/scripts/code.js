const setup = () => {

    let gemeentes = []
    let stopList = false;
    while(!stopList) {
        let inputText = prompt("Gemeente:");
        stopList =(inputText === "stop");
        if(!stopList){
            gemeentes.push(inputText);
        }
    }
    gemeentes.sort(compare);
    addGemeentes(gemeentes);
};

const addGemeentes = (gemeentes) => {
    let div = document.getElementById("gemeentes");
    let htmlText ="<select>";
    for(let i=0; i<gemeentes.length; i++){
        htmlText+="<option>"+gemeentes[i]+"</option>";
    }
    htmlText+="</select>";
    console.log(htmlText)
    div.innerHTML=htmlText;
}
const compare = (a,b) => {
    return a.localeCompare(b);
};
window.addEventListener("load", setup);