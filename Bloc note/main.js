const textarea = document.querySelector('textarea');
const textcolor = document.querySelector('#text-color');

const saveValue = localStorage.getItem('text');
const savecolorValue = localStorage.getItem('changecolortext');

textarea.value = saveValue
textarea.style.color = savecolorValue;
textcolor.value = savecolorValue

textarea.addEventListener("input", function (event) {
    localStorage.setItem('text', event.target.value);
});

textcolor.addEventListener("input", function (event) {
    textarea.style.color = event.target.value;
    localStorage.setItem('changecolortext', event.target.value);
})



