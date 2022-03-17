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
    let supprime = document.createElement("button")
    supprime.className = "enlevertache"
    supprime.innerText = "Delete"
    let getInput = getValue();
    if (getInput === '') {
        alert("Please enter a word")
        return;
    }
    let nodeText = document.createTextNode(getInput)
    let taches = document.createElement("div")
    taches.className = "rectangle1"
    taches.appendChild(nodeText)
    let block = document.createElement("div")
    block.className = "blocktache"
    block.appendChild(taches)
    block.appendChild(supprime)
    document.getElementById("TacheQuiBougePas").appendChild(block)
    document.getElementById("champstexte").value = "";
}








