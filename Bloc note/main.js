const textarea = document.querySelector('textarea');
const textcolor = document.querySelector('#text-color');
const backgroundcolor = document.querySelector('#background-color');

const saveValue = localStorage.getItem('text');
const savecolorValue = localStorage.getItem('changecolortext');
const savebackgroundcolorValue = localStorage.getItem('changebackgroundcolor');

textarea.value = saveValue;
textarea.style.color = savecolorValue;
textcolor.value = savecolorValue;
textarea.style.backgroundColor = savebackgroundcolorValue;
backgroundcolor.value = savebackgroundcolorValue;

textarea.addEventListener("input", function (event) {
    localStorage.setItem('text', event.target.value);
});

textcolor.addEventListener("input", function (event) {
    textarea.style.color = event.target.value;
    localStorage.setItem('changecolortext', event.target.value);
});

backgroundcolor.addEventListener("input", function (event) {
    textarea.style.backgroundColor = event.target.value;
    localStorage.setItem('changebackgroundcolor', event.target.value);
});





