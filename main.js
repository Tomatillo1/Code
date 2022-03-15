function getValue() {
    return document.getElementById("champstexte").value
}

const button = document.getElementById("valider");
button.addEventListener("click", getValue);
button.addEventListener("click", duplic);

function getValueIfEnterPressed(event) {
    if(event.key !== "Enter") return;
    button.click();
}

const relou = document.getElementById("champstexte");
relou.addEventListener("keyup", getValueIfEnterPressed)

function duplic() {
    let getInput = getValue();
    if (getInput === '') {
        alert("Please enter a word")
        return;
    }
    let nodeText = document.createTextNode(getInput)
    let Taches = document.createElement("div")
    Taches.id = "rectangle1"
    Taches.appendChild(nodeText)
    document.getElementById("TacheQuiBougePas").appendChild(Taches)
    document.getElementById("champstexte").value = "";
}






