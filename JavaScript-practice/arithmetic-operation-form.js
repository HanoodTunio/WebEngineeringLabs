const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");

const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");

let result = document.getElementById("result");

multiplyButton.addEventListener('click', () => {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);

    let multiplicationResult = firstNumber * secondNumber; // Use let instead of const
    multiplicationResult = multiplicationResult.toString();
    
    result.textContent = "Result: " + multiplicationResult;
    console.log("hello world..")
});


divideButton.addEventListener('click', () => {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);

    const divideResult = firstNumber / secondNumber;

    result.textContent = "Result: " + divideResult;
});

addButton.addEventListener('click', () => {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);

    const addResult = firstNumber + secondNumber;

    result.textContent = "Result: " + addResult;
});

subtractButton.addEventListener('click', () => {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);

    const subtractResult = firstNumber - secondNumber;

    result.textContent = "Result: " + subtractResult;
});


