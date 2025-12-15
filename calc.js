function calculateInterest() {
    // 1. Get input values by ID
    var p = document.getElementById('principal').value;
    var r = document.getElementById('rate').value;
    var t = document.getElementById('time').value;
    var resultDiv = document.getElementById('result');

    // 2. Validate input: Check if empty
    if (p === "" || r === "" || t === "") {
        resultDiv.innerHTML = "Invalid input";
        return;
    }

    // Convert strings to numbers
    var principal = parseFloat(p);
    var rate = parseFloat(r);
    var time = parseFloat(t);

    // 3. Validate input: Check if valid numbers
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        resultDiv.innerHTML = "Invalid input";
        return;
    }

    // 4. Calculate Simple Interest and Total Amount
    var si = (principal * rate * time) / 100;
    var total = principal + si;

    // 5. Display output with exactly 2 decimal places
    resultDiv.innerHTML = "Simple Interest: Rs" + si.toFixed(2) + ", Total Amount: Rs " + total.toFixed(2);
}