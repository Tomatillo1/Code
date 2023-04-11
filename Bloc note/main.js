const textarea1 = document.querySelector('#text-zone1');
const textcolor1 = document.querySelector('#text-color1');
const backgroundcolor1 = document.querySelector('#background-color1');

const saveValue1 = localStorage.getItem('text1');
const savecolorValue1 = localStorage.getItem('changecolortext1');
const savebackgroundcolorValue1 = localStorage.getItem('changebackgroundcolor1');

textarea1.value = saveValue1;
textarea1.style.color = savecolorValue1;
textcolor1.value = savecolorValue1;
textarea1.style.backgroundColor = savebackgroundcolorValue1;
backgroundcolor1.value = savebackgroundcolorValue1;

textarea1.addEventListener("input", function (event) {
    localStorage.setItem('text1', event.target.value);
});

textcolor1.addEventListener("input", function (event) {
    textarea1.style.color = event.target.value;
    localStorage.setItem('changecolortext1', event.target.value);
});

backgroundcolor1.addEventListener("input", function (event) {
    textarea1.style.backgroundColor = event.target.value;
    localStorage.setItem('changebackgroundcolor1', event.target.value);
});

const textarea2 = document.querySelector('#text-zone2');
const textcolor2 = document.querySelector('#text-color2');
const backgroundcolor2 = document.querySelector('#background-color2');

const saveValue2 = localStorage.getItem('text2');
const savecolorValue2 = localStorage.getItem('changecolortext2');
const savebackgroundcolorValue2 = localStorage.getItem('changebackgroundcolor2');

textarea2.value = saveValue2;
textarea2.style.color = savecolorValue2;
textcolor2.value = savecolorValue2;
textarea2.style.backgroundColor = savebackgroundcolorValue2;
backgroundcolor2.value = savebackgroundcolorValue2;

textarea2.addEventListener("input", function (event) {
    localStorage.setItem('text2', event.target.value);
});

textcolor2.addEventListener("input", function (event) {
    textarea2.style.color = event.target.value;
    localStorage.setItem('changecolortext2', event.target.value);
});

backgroundcolor2.addEventListener("input", function (event) {
    textarea2.style.backgroundColor = event.target.value;
    localStorage.setItem('changebackgroundcolor2', event.target.value);
});

const textarea3 = document.querySelector('#text-zone3');
const textcolor3 = document.querySelector('#text-color3');
const backgroundcolor3 = document.querySelector('#background-color3');

const saveValue3 = localStorage.getItem('text3');
const savecolorValue3 = localStorage.getItem('changecolortext3');
const savebackgroundcolorValue3 = localStorage.getItem('changebackgroundcolor3');

textarea3.value = saveValue3;
textarea3.style.color = savecolorValue3;
textcolor3.value = savecolorValue3;
textarea3.style.backgroundColor = savebackgroundcolorValue3;
backgroundcolor3.value = savebackgroundcolorValue3;

textarea3.addEventListener("input", function (event) {
    localStorage.setItem('text3', event.target.value);
});

textcolor3.addEventListener("input", function (event) {
    textarea3.style.color = event.target.value;
    localStorage.setItem('changecolortext3', event.target.value);
});

backgroundcolor3.addEventListener("input", function (event) {
    textarea3.style.backgroundColor = event.target.value;
    localStorage.setItem('changebackgroundcolor3', event.target.value);
});

const textarea4 = document.querySelector('#text-zone4');
const textcolor4 = document.querySelector('#text-color4');
const backgroundcolor4 = document.querySelector('#background-color4');

const saveValue4 = localStorage.getItem('text4');
const savecolorValue4 = localStorage.getItem('changecolortext4');
const savebackgroundcolorValue4 = localStorage.getItem('changebackgroundcolor4');

textarea4.value = saveValue4;
textarea4.style.color = savecolorValue4;
textcolor4.value = savecolorValue4;
textarea4.style.backgroundColor = savebackgroundcolorValue4;
backgroundcolor4.value = savebackgroundcolorValue4;

textarea4.addEventListener("input", function (event) {
    localStorage.setItem('text4', event.target.value);
});

textcolor4.addEventListener("input", function (event) {
    textarea4.style.color = event.target.value;
    localStorage.setItem('changecolortext4', event.target.value);
});

backgroundcolor4.addEventListener("input", function (event) {
    textarea4.style.backgroundColor = event.target.value;
    localStorage.setItem('changebackgroundcolor4', event.target.value);
});

const textarea5 = document.querySelector('#text-zone5');
const textcolor5 = document.querySelector('#text-color5');
const backgroundcolor5 = document.querySelector('#background-color5');

const saveValue5 = localStorage.getItem('text5');
const savecolorValue5 = localStorage.getItem('changecolortext5');
const savebackgroundcolorValue5 = localStorage.getItem('changebackgroundcolor5');

textarea5.value = saveValue5;
textarea5.style.color = savecolorValue5;
textcolor5.value = savecolorValue5;
textarea5.style.backgroundColor = savebackgroundcolorValue5;
backgroundcolor5.value = savebackgroundcolorValue5;

textarea5.addEventListener("input", function (event) {
    localStorage.setItem('text5', event.target.value);
});

textcolor5.addEventListener("input", function (event) {
    textarea5.style.color = event.target.value;
    localStorage.setItem('changecolortext5', event.target.value);
});

backgroundcolor5.addEventListener("input", function (event) {
    textarea5.style.backgroundColor = event.target.value;
    localStorage.setItem('changebackgroundcolor5', event.target.value);
});

const textarea6 = document.querySelector('#text-zone6');
const textcolor6 = document.querySelector('#text-color6');
const backgroundcolor6 = document.querySelector('#background-color6');

const saveValue6 = localStorage.getItem('text6');
const savecolorValue6 = localStorage.getItem('changecolortext6');
const savebackgroundcolorValue6 = localStorage.getItem('changebackgroundcolor6');

textarea6.value = saveValue6;
textarea6.style.color = savecolorValue6;
textcolor6.value = savecolorValue6;
textarea6.style.backgroundColor = savebackgroundcolorValue6;
backgroundcolor6.value = savebackgroundcolorValue6;

textarea6.addEventListener("input", function (event) {
    localStorage.setItem('text6', event.target.value);
});

textcolor6.addEventListener("input", function (event) {
    textarea6.style.color = event.target.value;
    localStorage.setItem('changecolortext6', event.target.value);
});

backgroundcolor6.addEventListener("input", function (event) {
    textarea6.style.backgroundColor = event.target.value;
    localStorage.setItem('changebackgroundcolor6', event.target.value);
});