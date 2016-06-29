function add(numOne, numTwo){
  return numOne + numTwo;
}

function multiple(numOne, numTwo){
  return numOne * numTwo;
}

function divide(numOne, numTwo){
  return numOne / numTwo;
}

function subtract(numOne, numTwo){
  return numOne - numTwo;
}

var inputsArray = [];

$(document).ready(function(){
  $('.calcButton').on("click", function(){
    console.log($(this).text());
    runOperation($(this).text());
  });
});
