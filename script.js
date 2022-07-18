const password = document.getElementById("password")

let lettersChosen = []
let numbersChosen = []

const generateBtn = document.getElementById("generate-btn")
const showBtn = document.getElementById("show-btn")
const copyBtn = document.getElementById("copy-btn")

let finalPassword
let finalPasswordLength

showBtn.disabled = true
generateBtn.disabled = true
copyBtn.disabled = true
password.innerHTML = '*'.repeat(10)

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "1234567890@#"

document.getElementById("ten-characters-option-before").addEventListener("click", () => setPasswordLength(10))
document.getElementById("twelve-characters-option-before").addEventListener("click", () => setPasswordLength(12))
document.getElementById("fourteen-characters-option-before").addEventListener("click", () => setPasswordLength(14))

function enableButton(btn) {
    btn.disabled = false
    btn.style.backgroundColor = "rgba(17, 17, 17, 0.541)"
    btn.style.boxShadow = "3px 3px 9px rgb(112, 112, 112)"
    btn.style.borderRadius = "5px"
    btn.style.cursor = "pointer"
}

const options = [
    {
        HTMLElement: document.getElementById("ten-characters-option-after"),
        passwordSize: 10
    },
    {
        HTMLElement: document.getElementById("twelve-characters-option-after"),
        passwordSize: 12
    },
    {
        HTMLElement: document.getElementById("fourteen-characters-option-after"),
        passwordSize: 14
    },
]

function setPasswordLength(length) {
    const optionChosen = options.filter(option => option.passwordSize === length)
    const otherOptions = options.filter(option => option.passwordSize !== length)
    optionChosen[0].HTMLElement.style.display = 'block'
    finalPasswordLength = length
    otherOptions.map(option => option.HTMLElement.style.display = 'none')
    enableButton(generateBtn)
}

function getRandomLetters() {
    for (let i = 0; i <= finalPasswordLength / 2; i++) {
        lettersChosen.push(letters.charAt(Math.floor(Math.random() * letters.length)))
    }
}

function getRandomNumbers() {
    for (let i = 0; i <= finalPasswordLength / 2; i++) {
        numbersChosen.push(numbers.charAt(Math.floor(Math.random() * numbers.length)))
    }
}

function generatePassword() {
    lettersChosen = []
    numbersChosen = []
    password.innerHTML = '*'.repeat(finalPasswordLength)
    getRandomLetters()
    getRandomNumbers()
    const finalStringPassword = lettersChosen.join("") + numbersChosen.join("")
    const finalArrayPassword = finalStringPassword.split("")
    for (let a = finalArrayPassword.length - 1; a > 0; a--) {
        const j = Math.floor(Math.random() * (a + 1));
        const temp = finalArrayPassword[a];
        finalArrayPassword[a] = finalArrayPassword[j];
        finalArrayPassword[j] = temp;
    }
    finalPassword = finalArrayPassword.join("")
    enableButton(copyBtn)
    enableButton(showBtn)
}

function showPassword() {
    password.innerHTML = finalPassword
}

function hidePassword() {
    password.innerHTML = '*'.repeat(10)
}

function copyPassword() {
    navigator.clipboard.writeText(finalPassword);
}