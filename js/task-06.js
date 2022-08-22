const inputRef = document.querySelector('#validation-input')

const onInputBlur = (event) => {
    const inputDataLength = Number(inputRef.dataset.length)
    const currentTargetLength = event.currentTarget.value.length

    if (currentTargetLength === inputDataLength) {
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid')

    } else {
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid')

    }
}

inputRef.addEventListener('blur', onInputBlur);
