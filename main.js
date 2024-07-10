screen = document.getElementById('screen')

calculator_buttons = document.getElementById('calc-buttons')

calculator_buttons.addEventListener('click', buttonClick)

function buttonClick (event) {
    if (event.target.nodeName === 'BUTTON') {
        if (event.target.id === 'C') { // clear
            screen.innerHTML = ' '
        } else if (event.target.id === '=') {
            input = screen.innerHTML
            const result = calc(input)
            screen.innerHTML = result
        } else if (event.target.id == 'bs') { // backspace
            screen.innerHTML = screen.innerHTML.slice(0,-1)
        } else {
            screen.innerHTML += event.target.id
        }
    }
}

function calc(str) {
    let result = eval(str)
    result = String(result).slice(0,12) // slice to fit in calculator screen
    return result
}