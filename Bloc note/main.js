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

doSomething("text-zone1", "text-color1", "background-color1", "text1", "textColor1", "backGround1");
doSomething("text-zone2", "text-color2", "background-color2", "text2", "textColor2", "backGround2");
doSomething("text-zone3", "text-color3", "background-color3", "text3", "textColor3", "backGround3");
doSomething("text-zone4", "text-color4", "background-color4", "text4", "textColor4", "backGround4");
doSomething("text-zone5", "text-color5", "background-color5", "text5", "textColor5", "backGround5");
doSomething("text-zone6", "text-color6", "background-color6", "text6", "textColor6", "backGround6");

function clickSomething(areaId) {
    const clickArea = document.querySelector(`#${areaId}`);
    //const labels = document.querySelectorAll('label.hide')
    const otherArea = document.querySelectorAll("textarea");
    const addDivStyle = document.querySelector(".allBlocsNote")

    clickArea.addEventListener("click", function (event) {
        for (let area of otherArea) {
            area.classList.add("hide");
            area.parentElement.classList.add("hide");
        }
        addDivStyle.classList.add("allBlocsNoteChanged");
        clickArea.parentElement.classList.remove("hide");
        clickArea.parentElement.style.padding = "0 2rem 2rem 2rem";
        clickArea.classList.remove("hide");
    });
};

clickSomething("text-zone1");
clickSomething("text-zone2");
clickSomething("text-zone3");
clickSomething("text-zone4");
clickSomething("text-zone5");
clickSomething("text-zone6");





