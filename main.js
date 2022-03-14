function getValue() {
    const input = document.getElementById("champstexte")
    alert(input.value)
    input.value = '';
}

const button = document.getElementById("valider");
button.addEventListener("click", getValue);

function getValueIfEnterPressed(event) {
    if(event.key !== "Enter") return;
    button.click();
}

const relou = document.getElementById("champstexte");
relou.addEventListener("keyup", getValueIfEnterPressed)
