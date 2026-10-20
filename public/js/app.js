const firstNameInp = document.querySelector("#firstName")
const lastNameInp = document.querySelector("#lastName")
const usernameInp = document.querySelector("#username")
const emailInp = document.querySelector("#email")
const passwordInp = document.querySelector("#password")
const confirmPasswordInp = document.querySelector("#confirmPassword")
const form = document.querySelector(".signup-form")
const errorSection = document.querySelector(".error-section")
const errorBox = errorSection.querySelector(".error-box")
const errorText = errorSection.querySelector(".error-box > .massege")

const showError = () => {
    errorSection.classList.remove("hide-error")

    setTimeout(() => {
        errorSection.classList.add("hide-error")
    }, 3000)
}
const successMassage = () => {
    errorBox.classList.remove("error")
    errorBox.classList.remove("success")

    setTimeout(() => {
        errorSection.classList.add("hide-error" , "success")
    }, 3000)
}

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const firstName = firstNameInp.value
    const lastName = lastNameInp.value
    const username = usernameInp.value
    const email = emailInp.value
    const password = passwordInp.value
    const confirmPassword = confirmPasswordInp.value
    let userPassword;

    if (password === confirmPassword) {
        userPassword = password
    } else {
        errorText.textContent = "Passwords do not match, please try again"
        return showError()
    }

    const userInfo = {
        firstName,
        lastName,
        username,
        email,
        userPassword,
    }

    const res = await fetch("http://localhost:3000/api/create-user" , {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
            "Content-Type": "application/json",
        }
    })

    if (res.status === 201) {
        firstNameInp.value = ""
        lastNameInp.value = ""
        usernameInp.value = ""
        emailInp.value = ""
        passwordInp.value = ""
        confirmPasswordInp.value = ""

        errorText.textContent = "yout acount created successfully :))"
        successMassage()
    } else {
        errorText.textContent = "sorry, something went wrong :("
        return showError()
    }
})