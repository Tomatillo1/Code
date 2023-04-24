function handleColor(textAreaId, textColorId, backgroundColorId, textKey, textColorKey, backgroundColorKey, titleId) {
    const textarea = document.querySelector(`#${textAreaId}`);
    const textColor = document.querySelector(`#${textColorId}`);
    const backgroundColor = document.querySelector(`#${backgroundColorId}`);
    const titleColors = document.querySelector(`#${titleId}`);

    const saveValue = localStorage.getItem(textKey);
    const saveColorValue = localStorage.getItem(textColorKey);
    const saveBackgroundColorValue = localStorage.getItem(backgroundColorKey);

    textarea.value = saveValue;
    textarea.style.color = saveColorValue;
    textColor.value = saveColorValue;
    textarea.style.backgroundColor = saveBackgroundColorValue;
    backgroundColor.value = saveBackgroundColorValue;
    titleColors.style.color = saveColorValue;
    titleColors.style.backgroundColor = saveBackgroundColorValue;

    textarea.addEventListener("input", function (event) {
        localStorage.setItem(textKey, event.target.value);
    });

    textColor.addEventListener("input", function (event) {
        textarea.style.color = event.target.value;
        titleColors.style.color = event.target.value;
        localStorage.setItem(textColorKey, event.target.value);
    });

    backgroundColor.addEventListener("input", function (event) {
        textarea.style.backgroundColor = event.target.value;
        titleColors.style.backgroundColor = event.target.value;
        localStorage.setItem(backgroundColorKey, event.target.value);
    });
}

function handleTextAreaClick(areaId, titleId) {
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

function styleBoldChange(areaFindId, textBoldKey) {
    const areaChangeBold = document.querySelector(`#${areaFindId}`);
    const numberForButtonBold = areaFindId.slice(-1);
    const boldButton = document.querySelector(`.buttonBold${numberForButtonBold}`);
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

function styleItalicChange(areaFindId2, textItalicKey) {
    const areaChangeItalic = document.querySelector(`#${areaFindId2}`);
    const numberForButtonItalic = areaFindId2.slice(-1);
    const ItalicButton = document.querySelector(`.buttonItalic${numberForButtonItalic}`);
    const isItalic = localStorage.getItem(textItalicKey) === 'true';
    if (isItalic) {
        areaChangeItalic.style.fontStyle = 'italic';
    } else {
        areaChangeItalic.style.fontStyle = 'normal';
    }
    ItalicButton.addEventListener('click', () => {
        const isItalic = localStorage.getItem(textItalicKey) === 'true';
        if (isItalic) {
            areaChangeItalic.style.fontStyle = 'normal';
            localStorage.setItem(textItalicKey, false);
        } else {
            areaChangeItalic.style.fontStyle = 'italic';
            localStorage.setItem(textItalicKey, true);
        }
    });
}

function styleUnderlineChange(areaFindId3, textUnderlineKey) {
    const areaChangeUnderline = document.querySelector(`#${areaFindId3}`);
    const numberForButtonUnderline = areaFindId3.slice(-1);
    const UnderlineButton = document.querySelector(`.buttonUnderline${numberForButtonUnderline}`);
    const isUnderline = localStorage.getItem(textUnderlineKey) === 'true';
    if (isUnderline) {
        areaChangeUnderline.style.textDecoration = 'underline';
    } else {
        areaChangeUnderline.style.textDecoration = 'normal';
    }
    UnderlineButton.addEventListener('click', () => {
        const isUnderline = localStorage.getItem(textUnderlineKey) === 'true';
        if (isUnderline) {
            areaChangeUnderline.style.textDecoration = 'normal';
            localStorage.setItem(textUnderlineKey, false);
        } else {
            areaChangeUnderline.style.textDecoration = 'underline';
            localStorage.setItem(textUnderlineKey, true);
        }
    });
}

function titleNoteStorage(titleNoteId, titleNoteKey) {
    const titleNoteChange = document.querySelector(`#${titleNoteId}`);
    const saveValueNoteTitle = localStorage.getItem(titleNoteKey);

    titleNoteChange.addEventListener("input", function (event){
        localStorage.setItem(titleNoteKey, event.target.value);
    });

    titleNoteChange.value = saveValueNoteTitle;
}

const resetLocalStorage = document.querySelector(".resetButton");

resetLocalStorage.addEventListener("click", () => {

    if (confirm("Veux-tu supprimer toutes les notes ?") == true) {
        localStorage.clear();
        location.reload();
    }
});

for (let i = 1; i < 7; i++) {
    handleColor(`text-zone${i}`, `text-color${i}`, `background-color${i}`, `text${i}`, `textColor${i}`, `backGround${i}`, `titleNote${i}`);
    handleTextAreaClick(`text-zone${i}`, `titleNote${i}`);
    styleBoldChange(`text-zone${i}`, `textBold${i}`);
    styleItalicChange(`text-zone${i}`, `textItalic${i}`);
    styleUnderlineChange(`text-zone${i}`, `textUnderline${i}`);
    titleNoteStorage(`titleNote${i}`, `title-note-key${i}`);
}