// Seleção de elementos
const generatePasswordBtn = document.querySelector("#generate-password")
const generatedPasswordElement = document.querySelector("#generated-password")

const openCloseGenerateButton = document.querySelector("#open-generate-password")
const generatePasswordContainer = document.querySelector("#generate-options")
const lengthInput = document.querySelector("#length")
const lettersInput = document.querySelector("#letters")
const numbersInput = document.querySelector("#numbers")
const symbolsInput = document.querySelector("#symbols")
const copyPasswordBtn = document.querySelector("#copy-password")

// Funções
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString()
}

const getSymbol = () => {
    const symbols = "(){}[]=+-_~^/?;:.>,<!@#$%¨&*`"
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = ""

    const passwordLength = +lengthInput.value

    const generators = []

    if (lettersInput.checked){
        generators.push(getLetterLowerCase, getLetterUpperCase)
    }

    if (numbersInput.checked){
        generators.push(getNumber)
    }

    if (symbolsInput.checked){
        generators.push(getSymbol)
    }

    if (generators.length === 0){
        return
    }

    for (i = 0; i < passwordLength; i = i + generators.length) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]()

            password += randomValue
        })
    }

    password = password.slice(0, passwordLength)

    generatedPasswordElement.style.display = "block"
    generatedPasswordElement.querySelector("h4").innerText = password
}
// Eventos 
generatePasswordBtn.addEventListener("click", () => {
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    )
})

openCloseGenerateButton.addEventListener("click", () => {
    generatePasswordContainer.classList.toggle("hide")
})

copyPasswordBtn.addEventListener("click", (e) => {
    e.preventDefault()

    const password = generatedPasswordElement.querySelector("h4").innerText

    navigator.clipboard.writeText(password).then(() => {
        copyPasswordBtn.innerText = "Senha copiada"

        setTimeout(() => {
            copyPasswordBtn.innerText = "Copiar"
        }, 1000)
    })
})
