function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : "undefined (cannot divide by zero)";
}

function modulus(a, b) {
    return b !== 0 ? a % b : "undefined (cannot divide by zero)";
}

function printResult(message) {
    document.getElementById("result").innerHTML = message;
}

function calculate(operator) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        printResult("Please enter valid numbers.");
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            printResult(`The sum of ${num1} and ${num2} is ${result}.`);
            break;
        case '-':
            result = subtract(num1, num2);
            printResult(`The difference of ${num1} and ${num2} is ${result}.`);
            break;
        case '*':
            result = multiply(num1, num2);
            printResult(`The product of ${num1} and ${num2} is ${result}.`);
            break;
        case '/':
            result = divide(num1, num2);
            printResult(`The quotient of ${num1} and ${num2} is ${result}.`);
            break;
        case '%':
            result = modulus(num1, num2);
            printResult(`The remainder of ${num1} divided by ${num2} is ${result}.`);
            break;
        default:
            printResult("Invalid operation.");
    }
}
