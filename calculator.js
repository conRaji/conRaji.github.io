let results = []; // To store valid results

// Start table header
document.write("<table border='1' style='width:50%; margin: 20px auto; text-align: center;'>");
document.write("<tr style='background-color: orange; color: white;'><th>x</th><th>op</th><th>y</th><th>result</th></tr>");

while (true) {
    // Get user input
    let x = prompt("Enter the first number:");
    if (x === null) break; 
    let y = prompt("Enter the second number:");
    if (y === null) break; 
    let operator = prompt("Enter an operator (+, -, *, /, %):");
    if (operator === null) break; 

    x = parseFloat(x);
    y = parseFloat(y);

    let result;

    if (isNaN(x) || isNaN(y)) {
        result = "wrong input number";
    } else {
        // Perform the operation
        switch (operator) {
            case '+':
                result = x + y;
                break;
            case '-':
                result = x - y;
                break;
            case '*':
                result = x * y;
                break;
            case '/':
                result = y !== 0 ? x / y : "computation error";
                break;
            case '%':
                result = x % y;
                break;
            default:
                result = "computation error";
        }
    }

    // Add row to the table
    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");

    // Store valid results
    if (typeof result === "number") {
        results.push(result);
    }
}

// Close the main table
document.write("</table>");

if (results.length > 0) {
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((sum, value) => sum + value, 0);
    let avg = total / results.length;

    // Create the summary table
    document.write("<table border='1' style='width:50%; margin: 20px auto; text-align: center;'>");
    document.write("<tr style='background-color: orange; color: white;'><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
} else {
    document.write("No valid results to display.");
}
