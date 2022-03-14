function getValue () {
    let input = document.getElementById("champstexte").value = '';
    alert(input)
}

const button = document.getElementById("valider");
button.addEventListener("click", getValue);

