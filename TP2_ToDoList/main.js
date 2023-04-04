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
function load(){
    let localTasks = localStorage.getItem("name")
    document.getElementById("todocontainer").innerHTML = localTasks

    let ToDo = [...document.getElementsByClassName("blocktache")]

    ToDo.forEach((item) => {
        let button = item.querySelector(".enlevertache");
        button.addEventListener("click",() => {
            DeleteTodo(item)
        })
    })
}

function DeleteTodo(ToDo){
    document.getElementById("todocontainer").removeChild(ToDo)
    const data = document.getElementById("todocontainer").innerHTML;
    localStorage.setItem("name", data);
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
        DeleteTodo(ToDo)
    });

    ToDo.appendChild(tasktextcontainer)
    ToDo.appendChild(deletebutton)
    let todocontainer = document.getElementById("todocontainer")
    todocontainer.appendChild(ToDo)
    document.getElementById("champstexte").value = "";
    localStorage.setItem("name",todocontainer.innerHTML)
}















