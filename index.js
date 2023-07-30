const main = document.querySelector(`main`)
const operations = document.getElementById('input')
const resInput = document.getElementById('result')
const root = document.querySelector(':root')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.getElementById('erase').addEventListener('click', function () {
    operations.value = ""
    resInput.value = ""
    operations.focus()
})


operations.addEventListener("keydown", function (event) {
    event.preventDefault()
    // Caso a tecla acionada esteja dentro de allowedKeys vai ser mostrada no operations, caso contrário não aparece.
    if (allowedKeys.includes(event.key)) {
        operations.value += event.key
        return
    }
    // Utiliza do splice para apagar o último valor de operations ao clickar no backspace
    if (event.key === "Backspace") {
        operations.value = operations.value.slice(0, -1)
    }
    if (event.key === "Enter") {
        calculate()
    }
})


document.getElementById("equal").addEventListener('click', calculate)

function calculate() {
    const result = eval(operations.value)
    resInput.value = result
}

document.getElementById("copyToClipboard").addEventListener('click', function (event) {
    const btn = event.currentTarget
    if (btn.innerText === "Copy") {
        btn.innerText = "Copied!"
        navigator.clipboard.writeText(resInput.value)
    } else {
        btn.innerText = "Copy"
    }
})

document.getElementById("Switcher").addEventListener("click", function () {
    if (main.dataset.theme === "dark") {
        root.style.setProperty("--bg-color", "#ffffff")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--primary-color", "#E34A6F")
        main.dataset.theme = "light"
    } else {
        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--font-color", "#ffffff")
        root.style.setProperty("--primary-color", "#80FFEC")
        main.dataset.theme = "dark"
    }
})



const keys = document.querySelectorAll('.charKey')
keys.forEach(function (btn) {
    btn.addEventListener('click', function () {
        const btnValue = btn.dataset.value
        operations.value += btnValue
    })
})







