function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

function operate(operator, num1, num2){
    return operator(num1, num2)
}

const displayBox = document.querySelector('#display')
var displayValue = 0

function display(){
    displayBox.textContent = displayValue
}

const oneBtn = document.querySelector('#one')
oneBtn.addEventListener('click',() => {
    displayValue = 1
    display()
});

const twoBtn = document.querySelector('#two')
twoBtn.addEventListener('click',() => {
    displayValue = 2
    display()
});