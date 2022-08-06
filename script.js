//arithmetic funcitons
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

//coding the buttons
const displayBox = document.querySelector('#display')
var displayValue = ""
var operatorList = [add, subtract, multiply ,divide]
var operator = null
var keptValue = null

function display(){
    displayBox.textContent = displayValue
};

function equal(){
    let answer = operate(operator, Number(keptValue), Number(displayValue))
    console.log("answer: " + answer)
    displayValue = answer
    console.log("displayValue: " + displayValue)
    display()
}

function numberDisplay(number){
    let str = number.toString()
    displayValue = displayValue.concat(str)
    display()
}

function decimalDisplay(){
    if (displayValue.includes(".") == true){
        return
    }
    else {
        displayValue = displayValue.concat(".");
        display();
    }
}

function operatorDisplay(index){
    if (keptValue != null){
        equal();
        keptValue = displayValue;
        displayValue = "";
        operator = operatorList[index]
    }
    else {
        keptValue = displayValue;
        console.log("firstValue: " + keptValue)
        displayValue = "";
        console.log("displayValue: " + displayValue)
        operator = operatorList[index]
    }
}

// Loop to assign each button a number value
const numberBtn = Array.from(document.querySelectorAll('.number'));
console.log(numberBtn);

for (let i = 0; i < numberBtn.length; i++){
    let element = numberBtn[i];
    element.addEventListener('click', () => numberDisplay(i));
}

//Loop to assign each button an operator
const operatorBtn = Array.from(document.querySelectorAll('.operator'));
console.log(operatorBtn)


const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');

addBtn.addEventListener('click', () => operatorDisplay(0));
subtractBtn.addEventListener('click', () => operatorDisplay(1));
multiplyBtn.addEventListener('click', () => operatorDisplay(2));
divideBtn.addEventListener('click', () => operatorDisplay(3));

// for (let i = 0; i < operatorBtn; i++){
//     let element1 = operatorBtn[i];
//     element1.addEventListener('click', () => operatorDisplay(i));
// }

const decimalBtn = document.querySelector('#decimal');
decimalBtn.addEventListener('click', () => decimalDisplay());

const equalBtn = document.querySelector('#equal');
equalBtn.addEventListener('click', () => equal());

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    displayValue = "";
    keptValue = null;
    display()
})


/* OLD CODE

const oneBtn = document.querySelector('#one');
oneBtn.addEventListener('click',() => numberDisplay(1));

const twoBtn = document.querySelector('#two');
twoBtn.addEventListener('click',() => {
    displayValue = 2
    display()
});
*/
