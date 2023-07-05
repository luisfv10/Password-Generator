let passwordLenght = 16
const inputEl = document.querySelector("#password")
const upperCaseCheckEl = document.querySelector("#uppercase-check")
const numberCheckEl = document.querySelector("#number-check")
const symbolCheckEl = document.querySelector("#symbol-check")
function generatePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyz"

  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numberChars = "123456789"
  const symbolChars = "?!@&*()[]"
  if (upperCaseCheckEl.checked) {
    chars += upperCaseChars
  }
  if (numberCheckEl.checked) {
    chars += numberChars
  }
  if (symbolCheckEl.checked) {
    chars += symbolChars
  }

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
upperCaseCheckEl.addEventListener("click", generatePassword)
numberCheckEl.addEventListener("click", generatePassword)
symbolCheckEl.addEventListener("click", generatePassword)

document.querySelector("copy-1").copyButtonEl.addEventListener("click", copy)
document.querySelector("copy-2").copyButtonEl.addEventListener("click", copy)

generatePassword()
