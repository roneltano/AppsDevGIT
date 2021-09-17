function dark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function add() {
  var num1 = parseInt(document.getElementById("firstnum").value);
  var num2 = parseInt(document.getElementById("secondnum").value);
  var ans = 0;
  ans = num1 + num2;
  document.getElementById("result").innerHTML = " Result : " + String(ans);
}
function substract() {
  var num1 = parseInt(document.getElementById("firstnum").value);
  var num2 = parseInt(document.getElementById("secondnum").value);
  var ans = 0;
  ans = num1 - num2;
  document.getElementById("result").innerHTML = " Result : " + String(ans);
}

function multiply() {
  var num1 = parseInt(document.getElementById("firstnum").value);
  var num2 = parseInt(document.getElementById("secondnum").value);
  var ans = 0;
  ans = num1 * num2;
  document.getElementById("result").innerHTML = " Result : " + String(ans);
}

function divide() {
  var num1 = parseInt(document.getElementById("firstnum").value);
  var num2 = parseInt(document.getElementById("secondnum").value);
  var ans = 0;
  ans = num1 / num2;
  document.getElementById("result").innerHTML = " Result : " + String(ans);
}
