const loginFormRef = document.querySelector('.login-form')
const inputTypeEmailRef = document.querySelector('input[type="email"]')
const inputTypePasswordRef = document.querySelector('input[type="password"]')

inputTypeEmailRef.setAttribute('autocomplete', 'email')
inputTypeEmailRef.setAttribute('required', '')

inputTypePasswordRef.setAttribute('autocomplete', 'current-password')
inputTypePasswordRef.setAttribute('required', '')


const onLoginBtnClick = (event) => {
    const {elements: {email, password}} = event.currentTarget

    const userData = new FormData()
    userData.append('email',email.value)
    userData.append('password',password.value)
    userData.forEach((value,key)=>{
        console.log(`${key}: ${value}`)
    })

    event.preventDefault()
    event.currentTarget.reset()
}
loginFormRef.addEventListener('submit', onLoginBtnClick)