var choice = parseInt(
  prompt("addition [1]\nsubstraction[2]\nmultiplication[3]\ndivision[4]\n")
);
var num1 = parseInt(prompt("Enter 1st number: "));
var num2 = parseInt(prompt("Enter 2nd number: "));

function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

switch (choice) {
  case 1:
    add();
    alert("result: " + add(num1, num2));
    break;
  case 2:
    substract();
    alert("result: " + substract(num1, num2));
    break;
  case 3:
    multiply();
    alert("result: " + multiply(num1, num2));
    break;
  case 4:
    divide();
    alert("result: " + divide(num1, num2));
    break;
  default:
    break;
}
