const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let firstValue = "";
let operator = "";
let secondValue = "";

for (const button of buttons) {
  button.addEventListener("click", function() {
    if (button.id === "clear") {
      firstValue = "";
      operator = "";
      secondValue = "";
      display.value = "";
    } else if (button.id === "plus" || button.id === "minus" || button.id === "times" || button.id === "divide") {
       operator = button.id;
       firstValue = display.value;
      display.value = "";
    } else if (button.id === "equals") {
      secondValue = display.value;
      if (operator === "plus") {
        display.value = parseFloat(firstValue) + parseFloat(secondValue);
      } else if (operator === "minus") {
        display.value = parseFloat(firstValue) - parseFloat(secondValue);
      } else if (operator === "times") {
        display.value = parseFloat(firstValue) * parseFloat(secondValue);
      } else if (operator === "divide") {
        display.value = parseFloat(firstValue) / parseFloat(secondValue);
      }
    } else {
      display.value += button.id;
    }
  });
}
