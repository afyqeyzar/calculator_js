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
var operatorList = [add, subtract, multiply ,divide]
var operator = null
var firstValue = 0

function display(){
    displayBox.textContent = displayValue
}

const oneBtn = document.querySelector('#one');
oneBtn.addEventListener('click',() => {
    displayValue = 1
    display()
});

const twoBtn = document.querySelector('#two');
twoBtn.addEventListener('click',() => {
    displayValue = 2
    display()
});

const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', () => {
    firstValue = displayValue
    console.log("firstValue: " + firstValue)
    displayValue = 0
    console.log("displayValue: " + displayValue)
    operator = operatorList[0]
});

const equalBtn = document.querySelector('#equal');
equalBtn.addEventListener('click', () => {
    let answer = operate(operator, firstValue, displayValue)
    console.log("answer: " + answer)
    displayValue = answer
    console.log("displayValue: " + displayValue)
    display()
});