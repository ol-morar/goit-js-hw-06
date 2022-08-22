function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnRef = document.querySelector('.change-color')
const spanRef = document.querySelector('.color')

const onChangeColorBtnClick = () => {
    let bgCurrentColor = getRandomHexColor();

    document.body.style.backgroundColor = bgCurrentColor
    spanRef.textContent = bgCurrentColor
}

changeColorBtnRef.addEventListener('click', onChangeColorBtnClick)