const answer = document.querySelector('.result-text');
let currentOperandValue = 0;
let operatorValue;
let calculatedPreviuosResult = 0;
let currentResult = 0;
answer.innerText = 0;

const operand = document.querySelector('.numbers');
const operator = document.querySelector('.operators');

const setResult = (currentOperandValue) => {
    answer.innerHTML = currentOperandValue;
}

const setcurrentOperandValue = (event) => {
    if (currentOperandValue !== 0) {
        currentOperandValue = +(currentOperandValue.toString() + event.target.value);
    } else {
        currentOperandValue = +(event.target.value);
    }
    setResult(currentOperandValue);

}

const setOperator = (event) => {
    operatorValue = event.target.value;
    setResult(0);
}

operand.addEventListener('click', setcurrentOperandValue);
operator.addEventListener('click', setOperator);
