function add(numOne, numTwo){
  return numOne + numTwo;
}

function multiply(numOne, numTwo){
  return numOne * numTwo;
}

function divide(numOne, numTwo){
  return numOne / numTwo;
}

function subtract(numOne, numTwo){
  return numOne - numTwo;
}

var inputsArray = [];
var firstNumber = "";
var operand = "";
var secondNumber = "";
var answer = "";

$(document).ready(function(){
  $('.calcButton').on("click", function(){
    calculator($(this).text());
    $('span').append(display());
  });
});

var calculator = function calculator(userInput){
  if (checkIsOperand(userInput)){
      updateOperand(userInput);
  } else if (checkIsClear(userInput)) {
    clearInputs();
  } else if (checkisEquals(userInput)){
    console.log(calculate());
  } else {
    updateNumber(userInput);
  }
}

var updateNumber = function updateNumber(userInput){
  if (operand === ""){
    updateFirstNumber(userInput);
  } else {
    updateSecondNumber(userInput);
  }
}

var updateFirstNumber = function updateFirstNumber(userInput){
  firstNumber += userInput;
  console.log("this is firstNumber: " + firstNumber);
}

var updateSecondNumber = function updateSecondNumber(userInput){
  secondNumber += userInput;
  console.log("this is secondNumber: " + secondNumber);
}

var updateOperand = function updateOperand(userInput){
  if (operand === ""){
    operand = userInput;
  } else {
    calculate(userInput);
  }
}

var checkIsOperand = function checkIsOperand(userInput){
  return (userInput === "+") || (userInput === "-") || (userInput === "*") || (userInput === "/")
}

var calculate = function calculate(newOperand = ""){
  if (operand === "+"){
    answer = add(parseFloat(firstNumber), parseFloat(secondNumber));
    resetInput(answer, newOperand);
    return answer;
  } else if (operand === "-") {
    answer = subtract(parseFloat(firstNumber), parseFloat(secondNumber));
    resetInput(answer, newOperand);
    return answer;
  } else if (operand === "*") {
    answer = multiply(parseFloat(firstNumber), parseFloat(secondNumber));
    resetInput(answer, newOperand);
    return answer;
  } else if (operand === "/"){
    answer = divide(parseFloat(firstNumber), parseFloat(secondNumber));
    resetInput(answer, newOperand);
    return answer;
  }
}

var checkisEquals = function checkisEquals(userInput){
  return userInput === "=";
}

var resetInput = function resetInput(answer, newOperand){
  firstNumber = answer;
  resetOperand(newOperand);
  clearSecondNumber();
}

var resetOperand = function resetOperand(newOperand = ""){
  operand = newOperand;
}

var clearSecondNumber = function clearSecondNumber(){
  secondNumber = '';
}

var clearFirstNumber = function clearFirstNumber(){
  firstNumber = '';
}

var clearInputs = function clearInputs(){
  clearFirstNumber();
  clearSecondNumber();
  resetOperand();
}

var checkIsClear = function checkIsClear(userInput){
  return userInput === "CLEAR";
}

var display = function display(){
  if (answer){
    return answer;
  } else if (secondNumber){
    return secondNumber;
  } else if (operand){
    return operand;
  } else if (firstNumber){
    return firstNumber;
  }
}
