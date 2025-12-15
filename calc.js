// --- 1. Simple Interest ---
function calculateSimple() {
    let p = parseFloat(document.getElementById('si-principal').value);
    let r = parseFloat(document.getElementById('si-rate').value);
    let t = parseFloat(document.getElementById('si-time').value);
    let resultDiv = document.getElementById('si-result');

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        showError(resultDiv); return;
    }

    let interest = (p * r * t) / 100;
    let total = p + interest;

    showResult(resultDiv, "#007bff", 
        `<strong>Interest:</strong> ₹${interest.toFixed(2)}<br>
         <strong>Total:</strong> ₹${total.toFixed(2)}`);
}

// --- 2. Compound Interest ---
function calculateCompound() {
    let p = parseFloat(document.getElementById('ci-principal').value);
    let r = parseFloat(document.getElementById('ci-rate').value);
    let t = parseFloat(document.getElementById('ci-time').value);
    let n = parseFloat(document.getElementById('ci-frequency').value);
    let resultDiv = document.getElementById('ci-result');

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        showError(resultDiv); return;
    }

    let amount = p * Math.pow((1 + (r / 100) / n), (n * t));
    let interest = amount - p;

    showResult(resultDiv, "#28a745", 
        `<strong>Interest:</strong> ₹${interest.toFixed(2)}<br>
         <strong>Total:</strong> ₹${amount.toFixed(2)}`);
}

// --- 3. Loan EMI Calculator ---
function calculateLoan() {
    let p = parseFloat(document.getElementById('loan-amount').value); // Principal
    let r = parseFloat(document.getElementById('loan-rate').value);   // Annual Rate
    let t = parseFloat(document.getElementById('loan-tenure').value); // Time in Years
    let resultDiv = document.getElementById('loan-result');

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        showError(resultDiv); return;
    }

    // EMI Formula: E = P * r * (1+r)^n / ((1+r)^n - 1)
    // Convert annual rate to monthly rate (percentage -> decimal / 12)
    let monthlyRate = r / 12 / 100;
    // Convert years to months
    let months = t * 12;

    let emi = (p * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
              (Math.pow(1 + monthlyRate, months) - 1);
    
    let totalPayment = emi * months;
    let totalInterest = totalPayment - p;

    showResult(resultDiv, "#6f42c1", 
        `<strong>Monthly EMI:</strong> ₹${emi.toFixed(2)}<br>
         <strong>Total Interest:</strong> ₹${totalInterest.toFixed(2)}<br>
         <strong>Total Payment:</strong> ₹${totalPayment.toFixed(2)}`);
}

// Helper functions to clean up code
function showError(div) {
    div.innerHTML = "<span style='color:red'>Invalid Input</span>";
    div.style.borderLeftColor = "red";
}

function showResult(div, color, text) {
    div.style.borderLeftColor = color;
    div.innerHTML = text;
}