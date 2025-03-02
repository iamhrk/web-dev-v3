const answer = document.querySelector(".result-text");
let currentOperandValue = 0;
let previousOperandValue = 0;
let currentOperator = "";
let previousOperator = "";
let operatorValue;
let calculatedPreviuosResult = 0;
let currentResult = 0;
let canSetOperator = true;
answer.innerText = 0;

const operand = document.querySelector(".numbers");
const operator = document.querySelector(".operators");
const equal = document.querySelector(".equal");

const displayResult = (event) => {
  event.stopPropagation();
  calculateCurrentResult();
  answer.innerText = currentResult;
};

const calculateCurrentResult = () => {
  if (previousOperator !== "") {
    switch (previousOperator) {
      case "+":
        currentResult = previousOperandValue + currentOperandValue;
        // alert(currentResult);
        break;
      case "-":
        currentResult = previousOperandValue - currentOperandValue;
        // alert(currentResult);
        break;
      case "*":
        currentResult = previousOperandValue * currentOperandValue;
        // alert(currentResult);
        break;
      case "/":
        currentResult = previousOperandValue / currentOperandValue;
        // alert(currentResult);
        break;
      default:
        console.error("Not a valid operation.");
        break;
    }
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
    if (currentResult !== 0) {
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
