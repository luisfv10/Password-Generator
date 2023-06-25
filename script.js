let passwordLenght = 16
const inputEl = document.querySelector("#password")
function generatePassword() {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789?!@&*()[]"

  let password = ""

  for (let i = 0; i < passwordLenght; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length)
    password += chars.substring(randomNumber, randomNumber + 1)
  }

  inputEl.value = password
}

function copy() {
  navigator.clipboard.writeText(inputEl.value)
}

const passwordLenghtEl = document.querySelector("#password-lenght")
passwordLenghtEl.addEventListener("input", function () {
  passwordLenght = passwordLenghtEl.value
  generatePassword()
})

document.querySelector("copy-1").copyButtonEl.addEventListener("click", copy)
document.querySelector("copy-2").copyButtonEl.addEventListener("click", copy)

generatePassword()

