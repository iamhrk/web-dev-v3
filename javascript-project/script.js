const answer = document.querySelector(".result-text");
let currentOperandValue = 0;
let previousOperandValue = 0;
let currentOperator = "";
let previousOperator = "";
let operatorValue;
let calculatedPreviuosResult = 0;
let currentResult = 0;
let canSetOperator = false;
let isResultCalculated = false;
answer.innerText = 0;

const operand = document.querySelector(".numbers");
const operator = document.querySelector(".operators");
const equal = document.querySelector(".equal");
const reset = document.querySelector(".clear-button");

const resetCalculator = () => {
  currentOperandValue = 0;
  previousOperandValue = 0;
  currentOperator = "";
  previousOperator = "";
  operatorValue;
  calculatedPreviuosResult = 0;
  currentResult = 0;
  canSetOperator = false;
  isResultCalculated = false;
  answer.innerText = 0;
};

const displayResult = (event) => {
  event.stopPropagation();
  calculateCurrentResult();
  if (isResultCalculated) {
    answer.innerText = currentResult;
  } else {
    answer.innerText = currentOperandValue;
  }
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
    isResultCalculated = true;
  }
};

const setResult = (currentOperandValue) => {
  answer.innerHTML = currentOperandValue;
  console.log("coperand", currentOperandValue);
};

const setcurrentOperandValue = (event) => {
  if (currentOperandValue !== 0) {
    currentOperandValue = +(
      currentOperandValue.toString() + event.target.value.toString()
    );
  } else {
    currentOperandValue = +event.target.value;
  }
  setResult(currentOperandValue);
  canSetOperator = true;
};

const setOperator = (event) => {
  if (canSetOperator) {
    calculateCurrentResult();
    currentOperator = event.target.value;
    previousOperandValue = currentOperandValue;
    if (isResultCalculated) {
      previousOperandValue = currentResult;
    }
    currentOperandValue = 0;
    previousOperator = currentOperator;
    setResult(0);
    canSetOperator = false;
    console.log("poperand", previousOperandValue);
    console.log("poperator", previousOperator);
  }
};

operand.addEventListener("click", setcurrentOperandValue);
operator.addEventListener("click", setOperator);
equal.addEventListener("click", displayResult);
reset.addEventListener("click", resetCalculator);
