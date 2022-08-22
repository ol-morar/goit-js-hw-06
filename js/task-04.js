const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const outputRef = document.querySelector('#value');

let counterValue = 0;

const onDecrementBtnClick = () => {
    counterValue -= 1;
    outputRef.textContent = counterValue;
}

const onIncrementBtnClick = () => {

    counterValue += 1;
    outputRef.textContent = counterValue;
}

decrementBtnRef.addEventListener('click', onDecrementBtnClick);
incrementBtnRef.addEventListener('click', onIncrementBtnClick);
