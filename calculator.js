let results = [];
let continueLoop = true;




document.write("<h1>Aggie Calculator Results</h1>");
document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");


while (continueLoop) {
    let x = prompt("Enter the first number (x):");
    if (x === null) break;


    let y = prompt("Enter the second number (y):");
    if (y === null) break;


    let op = prompt("Enter an operator (+, -, *, /, %):");
    if (op === null) break;


   
    let num1 = parseFloat(x);
    let num2 = parseFloat(y);
    let result;


   
    if (isNaN(num1) || isNaN(num2)) {
        result = "Error: Invalid Number";
    } else {
        if (op === "+") result = num1 + num2;
        else if (op === "-") result = num1 - num2;
        else if (op === "*") result = num1 * num2;
        else if (op === "/") result = num1 / num2;
        else if (op === "%") result = num1 % num2;
        else result = "Error: Invalid Operator";
    }


   
    if (typeof result === "number") {
        results.push(result);
    }




    let displayResult = (typeof result === "number") ? result : "<span class='error-text'>" + result + "</span>";
    document.write("<tr><td>" + x + "</td><td>" + op + "</td><td>" + y + "</td><td>" + displayResult + "</td></tr>");
}




document.write("</table>");


if (results.length > 0) {
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((a, b) => a + b, 0);
    let avg = total / results.length;


    document.write("<h2>Calculation Summary</h2>");
    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
} else {
    document.write("<p class='error-text'>No valid calculations were performed to summarize.</p>");
}

