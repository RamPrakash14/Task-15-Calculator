//! Calculator Task is created by using DOM
let h1 = document.createElement("h1");
h1.id = "title";
h1.textContent = "Calculator Task ";
const para = document.createElement("p");
para.id = "description";
para.innerHTML = "Calculator Task is created by using DOM";

let div1 = document.createElement("div");
div1.setAttribute("id", "heading");
div1.setAttribute("class", "heading");
div1.append(h1, para);

let div2 = document.createElement("div");
div2.setAttribute("id", "container");
div2.setAttribute("class", "calculator");

let div3 = document.createElement("div");
div3.setAttribute("id", "calc");
div3.setAttribute("class", "calc");

//!Creating the input
let input1 = document.createElement("input");
input1.setAttribute("placeholder", "0");
input1.setAttribute("class", "result");
input1.setAttribute("id", "result");

//!Creating the buttons using DOM
let buttonClear = document.createElement("button");
buttonClear.innerText = "C";
buttonClear.setAttribute("type", "button");
buttonClear.setAttribute("class", "button2");
buttonClear.setAttribute("id", "clear");

let buttonDelete = document.createElement("button");
buttonDelete.innerText = "Del";
buttonDelete.setAttribute("type", "button");
buttonDelete.setAttribute("class", "button3");
buttonDelete.setAttribute("id", "delete");

let buttonModulus = document.createElement("button");
buttonModulus.innerText = "%";
buttonModulus.setAttribute("type", "button");
buttonModulus.setAttribute("class", "button");
buttonModulus.setAttribute("id", "%");

let buttonAsteric = document.createElement("button");
buttonAsteric.innerText = "*";
buttonAsteric.setAttribute("type", "button");
buttonAsteric.setAttribute("class", "button");
buttonAsteric.setAttribute("id", "*");

let buttonSeven = document.createElement("button");
buttonSeven.innerText = "7";
buttonSeven.setAttribute("type", "button");
buttonSeven.setAttribute("class", "button");
buttonSeven.setAttribute("id", "7");

let buttonEight = document.createElement("button");
buttonEight.innerText = "8";
buttonEight.setAttribute("type", "button");
buttonEight.setAttribute("class", "button");
buttonEight.setAttribute("id", "8");

let buttonNine = document.createElement("button");
buttonNine.innerText = "9";
buttonNine.setAttribute("type", "button");
buttonNine.setAttribute("class", "button");
buttonNine.setAttribute("id", "9");

let buttonSlash = document.createElement("button");
buttonSlash.innerText = "/";
buttonSlash.setAttribute("type", "button");
buttonSlash.setAttribute("class", "button");
buttonSlash.setAttribute("id", "/");

let buttonFour = document.createElement("button");
buttonFour.innerText = "4";
buttonFour.setAttribute("type", "button");
buttonFour.setAttribute("class", "button");
buttonFour.setAttribute("id", "4");

let buttonFive = document.createElement("button");
buttonFive.innerText = "5";
buttonFive.setAttribute("type", "button");
buttonFive.setAttribute("class", "button");
buttonFive.setAttribute("id", "5");

let buttonSix = document.createElement("button");
buttonSix.innerText = "6";
buttonSix.setAttribute("type", "button");
buttonSix.setAttribute("class", "button");
buttonSix.setAttribute("id", "6");

let buttonSubtract = document.createElement("button");
buttonSubtract.innerText = "-";
buttonSubtract.setAttribute("type", "button");
buttonSubtract.setAttribute("class", "button");
buttonSubtract.setAttribute("id", "subtract");

let buttonOne = document.createElement("button");
buttonOne.innerText = "1";
buttonOne.setAttribute("type", "button");
buttonOne.setAttribute("class", "button");
buttonOne.setAttribute("id", "1");

let buttonTwo = document.createElement("button");
buttonTwo.innerText = "2";
buttonTwo.setAttribute("type", "button");
buttonTwo.setAttribute("class", "button");
buttonTwo.setAttribute("id", "2");

let buttonThree = document.createElement("button");
buttonThree.innerText = "3";
buttonThree.setAttribute("type", "button");
buttonThree.setAttribute("class", "button");
buttonThree.setAttribute("id", "3");

let buttonAdd = document.createElement("button");
buttonAdd.innerText = "+";
buttonAdd.setAttribute("type", "button");
buttonAdd.setAttribute("class", "button");
buttonAdd.setAttribute("id", "add");

let buttonZero = document.createElement("button");
buttonZero.innerText = "0";
buttonZero.setAttribute("type", "button");
buttonZero.setAttribute("class", "button");
buttonZero.setAttribute("id", "0");

let button00 = document.createElement("button");
button00.innerText = "00";
button00.setAttribute("type", "button");
button00.setAttribute("class", "button");
button00.setAttribute("id", "00");

let buttonEqual = document.createElement("button");
buttonEqual.innerText = "=";
buttonEqual.setAttribute("type", "button");
buttonEqual.setAttribute("class", "button1");
buttonEqual.setAttribute("id", "equal");

div3.append(
  input1,
  buttonClear,
  buttonDelete,
  buttonModulus,
  buttonAsteric,
  buttonSeven,
  buttonEight,
  buttonNine,
  buttonSlash,
  buttonFour,
  buttonFive,
  buttonSix,
  buttonSubtract,
  buttonOne,
  buttonTwo,
  buttonThree,
  buttonAdd,
  buttonZero,
  button00,
  buttonEqual
);
div2.append(div3);
document.body.append(div1, div2);

//! Function to display on input while the numbers is clicked
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) =>
  button.addEventListener("click", () => inputDisplay(button.textContent))
);
function inputDisplay(num) {
  input1.value += num;
}

//! Function to calculate the display
const equal = document.querySelector(".button1");
equal.addEventListener("click", process);
function process() {
  try {
    input1.value = eval(input1.value);
  } catch (error) {
    alert("only numbers are allowed");
  }
}

//! Function to clear the display
const clear = document.querySelector(".button2");
clear.addEventListener("click", clearFunction);
function clearFunction() {
  input1.value = "";
}

//!Function to delete the last digit in the display
const del = document.querySelector(".button3");
del.addEventListener("click", deleteFunction);
function deleteFunction() {
  input1.value = input1.value.slice(0, -1);
}