function getValue() {
    return document.getElementById("champstexte").value
}

const button = document.getElementById("valider");
button.addEventListener("click", () => {
    getValue()
    duplic()
});

function getValueIfEnterPressed(event) {
    if (event.key !== "Enter") return;
    button.click();
}

const relou = document.getElementById("champstexte");
relou.addEventListener("keyup", getValueIfEnterPressed)

function duplic() {
    let deletebutton = document.createElement("button")
    deletebutton.className = "enlevertache"
    deletebutton.innerText = "Supprimer"
    let getInput = getValue();
    if (getInput === '') {
        alert("Please enter a word")
        return;
    }
    let nodeText = document.createTextNode(getInput)
    let tasktextcontainer = document.createElement("div")
    tasktextcontainer.className = "rectangle1"
    tasktextcontainer.appendChild(nodeText)
    let ToDo = document.createElement("div")
    ToDo.className = "blocktache"
    deletebutton.addEventListener("click", () => {
        document.getElementById("taskscontainer").removeChild(ToDo)
    });

    ToDo.appendChild(tasktextcontainer)
    ToDo.appendChild(deletebutton)
    let tasksContainer = document.getElementById("taskscontainer")
    tasksContainer.appendChild(ToDo)
    document.getElementById("champstexte").value = "";
    localStorage.setItem("name", tasksContainer.outerHTML)
}

let localTasks = localStorage.getItem("name")
document.getElementById("taskscontainer").outerHTML = localTasks

let ToDo = [...document.getElementsByClassName("blocktache")]

ToDo.forEach((item) => {
    let button = item.querySelector(".enlevertache");
    button.addEventListener("click",() => {
        const container = document.getElementById("taskscontainer")
        console.log(container)
        container.removeChild(item)
    })
})















