const inputRef = document.querySelector('#font-size-control')
const outputTextRef = document.querySelector('#text')

const onInputRangeChange = (event) => {
    outputTextRef.style.fontSize = event.currentTarget.value + 'px'
}

inputRef.addEventListener('input', onInputRangeChange)