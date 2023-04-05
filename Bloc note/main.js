const textarea = document.querySelector('textarea');

const saveValue = localStorage.getItem('text')

textarea.addEventListener("input", function (event) {
    localStorage.setItem('text', event.target.value);
});

textarea.textContent = saveValue

