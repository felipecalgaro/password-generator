const password = document.getElementById("password")
const passwordHidden = "*"
var lettersChosen = []
var numbersChosen = []
let characterNumber;
var finalStringPassword
var finalArrayPassword
var finalPassword
const generateBtn = document.getElementById("generate-btn")
const showBtn = document.getElementById("show-btn")
const copyBtn = document.getElementById("copy-btn")

showBtn.disabled = true
generateBtn.disabled = true
copyBtn.disabled = true
password.innerHTML = passwordHidden.repeat(10)

const lettersArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbersArray = "1234567890@#"

document.getElementById("ten-characters-option-before").addEventListener("click", tenCharacter)
document.getElementById("twelve-characters-option-before").addEventListener("click", twelveCharacter)
document.getElementById("fourteen-characters-option-before").addEventListener("click", fourteenCharacter)

function btnEnabled() {
    showBtn.disabled = false
    showBtn.style.backgroundColor = "rgba(17, 17, 17, 0.541)"
    showBtn.style.boxShadow = "3px 3px 9px rgb(112, 112, 112)"
    showBtn.style.borderRadius = "5px"
    showBtn.style.cursor = "pointer"
    generateBtn.disabled = false
    generateBtn.style.backgroundColor = "rgba(17, 17, 17, 0.541)"
    generateBtn.style.boxShadow = "3px 3px 9px rgb(112, 112, 112)"
    generateBtn.style.borderRadius = "5px"
    generateBtn.style.cursor = "pointer"
    copyBtn.disabled = false
    copyBtn.style.backgroundColor = "rgba(17, 17, 17, 0.541)"
    copyBtn.style.boxShadow = "3px 3px 9px rgb(112, 112, 112)"
    copyBtn.style.borderRadius = "5px"
    copyBtn.style.cursor = "pointer"
}


function tenCharacter() {
    characterNumber = 10; 
    document.getElementById("ten-characters-option-after").style.display = "block"
    document.getElementById("twelve-characters-option-after").style.display = "none"
    document.getElementById("fourteen-characters-option-after").style.display = "none"
    btnEnabled()
}

function twelveCharacter() {
    characterNumber = 12; 
    document.getElementById("ten-characters-option-after").style.display = "none"
    document.getElementById("twelve-characters-option-after").style.display = "block"
    document.getElementById("fourteen-characters-option-after").style.display = "none"
    btnEnabled()
}

function fourteenCharacter() {
    characterNumber = 14; 
    document.getElementById("ten-characters-option-after").style.display = "none"
    document.getElementById("twelve-characters-option-after").style.display = "none"
    document.getElementById("fourteen-characters-option-after").style.display = "block"
    btnEnabled()
}


function getRandomLetters() {
    for (let i = 0; i <= characterNumber / 2; i++) {
        lettersChosen.push(lettersArray.charAt(Math.floor(Math.random() * lettersArray.length)))
    }
}

function getRandomNumbers() {
    for (i = 0; i <= characterNumber / 2; i++) {
        numbersChosen.push(numbersArray.charAt(Math.floor(Math.random() * numbersArray.length)))
    }
}


let seq = 0
function generatePassword() {
    if (seq % 2 == 0) {
        lettersChosen = []
        numbersChosen = []
        password.innerHTML = passwordHidden.repeat(characterNumber)
        getRandomLetters()
        getRandomNumbers()
        finalStringPassword = lettersChosen.join("") + numbersChosen.join("")
        finalArrayPassword = finalStringPassword.split("")
        for (var a = finalArrayPassword.length - 1; a > 0; a--) {
            var j = Math.floor(Math.random() * (a + 1));
            var temp = finalArrayPassword[a];
            finalArrayPassword[a] = finalArrayPassword[j];
            finalArrayPassword[j] = temp;
        }
        finalPassword = finalArrayPassword.join("")
        console.log(finalPassword)
        seq++
    } else {
        lettersChosen = []
        numbersChosen = []
        password.innerHTML = passwordHidden.repeat(characterNumber)
        getRandomLetters()
        getRandomNumbers()
        finalStringPassword = lettersChosen.join("") + numbersChosen.join("")
        finalArrayPassword = finalStringPassword.split("")
        for (var a = finalArrayPassword.length - 1; a > 0; a--) {
            var j = Math.floor(Math.random() * (a + 1));
            var temp = finalArrayPassword[a];
            finalArrayPassword[a] = finalArrayPassword[j];
            finalArrayPassword[j] = temp;
        }
        finalPassword = finalArrayPassword.join("")
        console.log(finalPassword)
        seq++
    }
}

function showPassword() {
    password.innerHTML = finalPassword
}

function hidePassword() {
    password.innerHTML = passwordHidden.repeat(10)
}

function copyPassword() {
    navigator.clipboard.writeText(finalPassword);
}