function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input[type="number"]')
const createBtnRef = document.querySelector('button[data-create]')
const destroyBtnRef = document.querySelector('button[data-destroy]')
const boxesContainerRef = document.querySelector('#boxes')

const createBoxes = (amount) => {
    const markup = []
    const initialSize = 30

    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement('div')
        box.style.width = initialSize + i * 10 + 'px'
        box.style.height = initialSize + i * 10 + 'px'
        box.style.backgroundColor = getRandomHexColor()

        markup.push(box)
    }

    boxesContainerRef.append(...markup)
}

const onCreateBtnClick = () => {
    const amountOfBoxes = inputRef.value

    createBoxes(amountOfBoxes)
    inputRef.value = ''
}

const onDestroyBtnClick = () => {
    boxesContainerRef.innerHTML = ''
}

createBtnRef.addEventListener('click', onCreateBtnClick)
destroyBtnRef.addEventListener('click', onDestroyBtnClick)