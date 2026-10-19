const firstNameInp = document.querySelector("#firstName")
const lastNameInp = document.querySelector("#lastName")
const usernameInp = document.querySelector("#username")
const emailInp = document.querySelector("#email")
const passwordInp = document.querySelector("#password")
const confirmPasswordInp = document.querySelector("#confirmPassword")
const submitBtn = document.querySelector(".signup-button")
const form = document.querySelector(".signup-form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const firstName = firstNameInp.value
    const lastName = lastNameInp.value
    const username = usernameInp.value
    const email = emailInp.value
    const password = passwordInp.value
    const confirmPassword = confirmPasswordInp.value
})