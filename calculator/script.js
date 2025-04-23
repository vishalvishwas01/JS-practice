// Get the input field
let input = document.getElementById("search");

// Function to add value to input
function addToInput(value) {
    input.value += value;
}

// Number buttons
document.getElementById("number1").onclick = () => addToInput("1");
document.getElementById("number2").onclick = () => addToInput("2");
document.getElementById("number3").onclick = () => addToInput("3");
document.getElementById("number4").onclick = () => addToInput("4");
document.getElementById("number5").onclick = () => addToInput("5");
document.getElementById("number6").onclick = () => addToInput("6");
document.getElementById("number7").onclick = () => addToInput("7");
document.getElementById("number8").onclick = () => addToInput("8");
document.getElementById("number9").onclick = () => addToInput("9");

// Operators
document.getElementById("number+").onclick = () => addToInput("+");
document.getElementById("number-").onclick = () => addToInput("-");
document.getElementById("numberx").onclick = () => addToInput("*"); // using * instead of 'x'
document.getElementById("number/").onclick = () => addToInput("/");
document.getElementById("number%").onclick = () => addToInput("%");

// Clear button
document.getElementById("numberC").onclick = () => input.value = "";

// Equal button
document.getElementById("number=").onclick = () => {
    try {
        input.value = eval(input.value); // evaluates the expression
    } catch (error) {
        input.value = "Error";
    }
};
