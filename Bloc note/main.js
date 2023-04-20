function doSomething(textAreaId, textColorId, backgroundColorId, textKey, textColorKey, backgroundColorKey) {
    const textarea = document.querySelector(`#${textAreaId}`);
    const textColor = document.querySelector(`#${textColorId}`);
    const backgroundColor = document.querySelector(`#${backgroundColorId}`);

    const saveValue = localStorage.getItem(textKey);
    const saveColorValue = localStorage.getItem(textColorKey);
    const saveBackgroundColorValue = localStorage.getItem(backgroundColorKey);

    textarea.value = saveValue;
    textarea.style.color = saveColorValue;
    textColor.value = saveColorValue;
    textarea.style.backgroundColor = saveBackgroundColorValue;
    backgroundColor.value = saveBackgroundColorValue;

    textarea.addEventListener("input", function (event) {
        localStorage.setItem(textKey, event.target.value);
    });

    textColor.addEventListener("input", function (event) {
        textarea.style.color = event.target.value;
        localStorage.setItem(textColorKey, event.target.value);
    });

    backgroundColor.addEventListener("input", function (event) {
        textarea.style.backgroundColor = event.target.value;
        localStorage.setItem(backgroundColorKey, event.target.value);
    });
}

for (let i = 1; i < 7; i++) {
    doSomething(`text-zone${i}`, `text-color${i}`, `background-color${i}`, `text${i}`, `textColor${i}`, `backGround${i}`);
}

function clickSomething(areaId) {
    const clickArea = document.querySelector(`#${areaId}`);
    const otherArea = document.querySelectorAll("textarea");
    const addDivStyle = document.querySelector(".allBlocsNote");

    clickArea.addEventListener("click", function (event) {
        for (let area of otherArea) {
            area.classList.add("hide");
            area.parentElement.classList.add("hide");
        }
        const numberNote = areaId.slice(-1);
        const label = document.querySelector(`.labelNote${numberNote}`);
        const labelButtonColor =document.querySelector(`.color-button${numberNote}`);
        label.classList.remove("hide");
        labelButtonColor.classList.remove("hide");
        addDivStyle.classList.add("allBlocsNoteChanged");
        clickArea.parentElement.classList.remove("hide");
        clickArea.classList.remove("hide");
        clickArea.parentElement.style.padding = "0 2rem 2rem 2rem";
    });
}

for (let i = 1; i < 7; i++) clickSomething(`text-zone${i}`);







