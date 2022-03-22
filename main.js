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
    supprime.id = "enlevertache"
    supprime.innerText = "Delete"
    let getInput = getValue();
    if (getInput === '') {
        alert("Please enter a word")
        return;
    }
    let nodeText = document.createTextNode(getInput)
    let tasktextcontainer = document.createElement("div")
    tasktextcontainer.className = "rectangle1"
    tasktextcontainer.appendChild(nodeText)
    let taskcontainer = document.createElement("div")
    taskcontainer.id = "blocktache"
    taskcontainer.appendChild(tasktextcontainer)
    taskcontainer.appendChild(supprime)
    for (let i = 0; i< taskcontainer; i++) {
        let blocks = taskcontainer[i]
        blocks.setAttribute("id", i + 1)
    }
    document.getElementById("taskscontainer").appendChild(taskcontainer)
    document.getElementById("champstexte").value = "";
    supprime.addEventListener("click",supprimeTache)
}

function supprimeTache(){
    let finishdelete = document.getElementById("blocktache");
    finishdelete.parentNode.removeChild(finishdelete);
}












