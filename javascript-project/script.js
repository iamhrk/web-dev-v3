const answer = document.querySelector(".result-text");
let currentOperandValue = 0;
let previousOperandValue = 0;
let currentOperator = "";
let previousOperator = "";
let operatorValue;
let calculatedPreviuosResult = 0;
let currentResult = "";
let canSetOperator = false;
let isResultCalculated = false;
answer.innerText = 0;

const operand = document.querySelector(".numbers");
const operator = document.querySelector(".operators");
const equal = document.querySelector(".equal");
const reset = document.querySelector(".clear-button");
const backspace = document.querySelector(".backspace");

const backspaceOperand = () => {
  currentOperandValue = +currentOperandValue.toString().slice(0, -1);
  answer.innerText = currentOperandValue;
};

const resetCalculator = () => {
  currentOperandValue = null;
  previousOperandValue = 0;
  currentOperator = "";
  previousOperator = "";
  operatorValue;
  calculatedPreviuosResult = 0;
  currentResult = "";
  canSetOperator = false;
  isResultCalculated = false;
  answer.innerText = 0;
};

const displayResult = (event) => {
  event.stopPropagation();
  calculateCurrentResult();
  answer.innerText = currentResult;
  previousOperandValue = currentResult;
  previousOperator = "";
};

const calculateCurrentResult = () => {
  if (previousOperator !== "") {
    switch (previousOperator) {
      case "+":
        currentResult = previousOperandValue + currentOperandValue;
        break;
      case "-":
        currentResult = previousOperandValue - currentOperandValue;
        break;
      case "*":
        currentResult = previousOperandValue * currentOperandValue;
        break;
      case "/":
        currentResult = previousOperandValue / currentOperandValue;
        break;
      default:
        console.error("Not a valid operation.");
        break;
    }
    previousOperandValue = currentResult;
    currentOperandValue = null;
    isResultCalculated = true;
    console.log("current result", currentResult);
    console.log("previousOperand", previousOperandValue);
    console.log("currentOperand", currentOperandValue);
  } else {
    isResultCalculated = false;
    if (currentResult !== "") {
      previousOperandValue = currentResult;
    } else {
      previousOperandValue = currentOperandValue;
    }
    currentOperandValue = null;
    console.log("current result else", currentResult);
    console.log("previousOperand else", previousOperandValue);
    console.log("currentOperand else", currentOperandValue);
  }
};

const setcurrentOperandValue = (event) => {
  if (isResultCalculated) {
    currentOperandValue = currentResult;
  }
  if (currentOperandValue !== null) {
    currentOperandValue = +(
      currentOperandValue.toString() + event.target.value.toString()
    );
  } else {
    currentOperandValue = +event.target.value;
  }
  console.log("coperand", currentOperandValue);
  answer.innerText = currentOperandValue;
  canSetOperator = true;
};

const setOperator = (event) => {
  if (canSetOperator) {
    calculateCurrentResult();
    currentOperator = event.target.value;
    previousOperator = currentOperator;
    answer.innerText = 0;
    canSetOperator = false;
  }
};

operand.addEventListener("click", setcurrentOperandValue);
operator.addEventListener("click", setOperator);
equal.addEventListener("click", displayResult);
reset.addEventListener("click", resetCalculator);
backspace.addEventListener("click", backspaceOperand);
