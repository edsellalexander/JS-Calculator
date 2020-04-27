// This is the function which will calculate the numbers.
function calc() {

  var a = parseInt(document.querySelector("#value1").value);
  // variable "b" is the second number.
  var b = parseInt(document.querySelector("#value2").value);
  // variable "op" is the operation used.
  var op = document.querySelector("#operator").value;
  // variable "calculate" is defined but not used until later in this function.
  var calculate;


  if (op == "add") {
    calculate = a + b;
  } else if (op == "sub") {
    calculate = a - b;
  } else if (op == "div") {
    calculate = a / b;
  } else if (op == "mul") {
    calculate = a * b;
  } else if (op == "pow") {
    calculate = a ** b;
  }else if (op == "mod") {
    calculate = a % b;
  }

  // Then lastly we output the result into the <div> inside index.html using the innerHTML property.
  document.querySelector("#result").innerHTML = calculate;
}

function reset() {
    calculate = 0
    
    document.querySelector("#result").innerHTML = calculate;
}