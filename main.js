function getValue() {
    return document.getElementById("champstexte").value
}

const button = document.getElementById("valider");
button.addEventListener("click", () => {
    getValue()
    duplic()
});

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
    let taches = document.createElement("div")
    taches.className = "rectangle1"
    taches.appendChild(nodeText)
    document.getElementById("TacheQuiBougePas").appendChild(taches)
    let supprime = document.createElement("button")
    supprime.className = "enlevertache"
    supprime.innerText = "Delete"
    document.getElementById("TacheQuiBougePas").appendChild(supprime)
    document.getElementById("champstexte").value = "";
}







