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

function clickSomething(areaId, titleId) {
    const clickArea = document.querySelector(`#${areaId}`);
    const otherArea = document.querySelectorAll("textarea");
    const addDivStyle = document.querySelector(".allBlocsNote");
    const removeAttribute = document.querySelector(`#${titleId}`);

    clickArea.addEventListener("click", () => {
        for (let area of otherArea) {
            area.classList.add("hide");
            area.parentElement.classList.add("hide");
        }
        const numberNote = areaId.slice(-1);
        const label = document.querySelector(`.labelNote${numberNote}`);
        const labelButtonColor = document.querySelector(`.color-button${numberNote}`);
        label.classList.remove("hide");
        labelButtonColor.classList.remove("hide");
        removeAttribute.removeAttribute("disabled");
        addDivStyle.classList.add("allBlocsNoteChanged");
        clickArea.parentElement.classList.remove("hide");
        clickArea.classList.remove("hide");
        clickArea.parentElement.style.padding = "0 2rem 2rem 2rem";
    });

    const numberButton = areaId.slice(-1);
    const findButtonId = document.querySelector(`.buttonReturn${numberButton}`);

    findButtonId.addEventListener("click", () => {
        clickArea.classList.add("hide");
        addDivStyle.classList.remove("allBlocsNoteChanged");
        const labelAfter = document.querySelector(`.labelNote${numberButton}`);
        const labelButtonColorAfter = document.querySelector(`.color-button${numberButton}`);
        labelAfter.classList.add("hide");
        labelButtonColorAfter.classList.add("hide");
        removeAttribute.setAttribute("disabled", "");
        for (let areaAfter of otherArea) {
            areaAfter.parentElement.classList.remove("hide");
            areaAfter.classList.remove("hide");
        }
        clickArea.parentElement.style.padding = '';
    });
}

for (let i = 1; i < 7; i++) clickSomething(`text-zone${i}`, `titleNote${i}`);


function styleBoldChange(areaFindId, textBoldKey) {
    const areaChangeBold = document.querySelector(`#${areaFindId}`);
    const numberForButtons = areaFindId.slice(-1);
    const boldButton = document.querySelector(`.buttonBold${numberForButtons}`);
    const isBold = localStorage.getItem(textBoldKey) === 'true';
    if (isBold) {
        areaChangeBold.style.fontWeight = 'bold';
    } else {
        areaChangeBold.style.fontWeight = 'normal';
    }
    boldButton.addEventListener('click', () => {
        const isBold = localStorage.getItem(textBoldKey) === 'true';
        if (isBold) {
            areaChangeBold.style.fontWeight = 'normal';
            localStorage.setItem(textBoldKey, false);
        } else {
            areaChangeBold.style.fontWeight = 'bold';
            localStorage.setItem(textBoldKey, true);
        }
    });
}

for (let i = 1; i < 7; i++) styleBoldChange(`text-zone${i}`, `textBold${i}`);

const resetLocalStorage = document.querySelector(".resetButton");

resetLocalStorage.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});

function titleNoteStorage(titleNoteId, titleNoteKey) {
    const titleNoteChange = document.querySelector(`#${titleNoteId}`);
    const saveValueNoteTitle = localStorage.getItem(titleNoteKey);
    console.log(saveValueNoteTitle)

    titleNoteChange.value = saveValueNoteTitle;

    titleNoteChange.addEventListener("input", function (event){
        localStorage.setItem(titleNoteKey, event.target.value);
    });
}

for (let i = 1; i < 7; i++) titleNoteStorage(`titleNote${i}`, `title-note-key${i}`);
