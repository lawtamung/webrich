function calculate() {
    // Get the values from the form
    const date = document.getElementById('date').value;
    const income = parseFloat(document.getElementById('income').value);
    const cost = parseFloat(document.getElementById('cost').value);

    // Calculate profit
    const profit = income - cost;

    // Calculate allocations
    const investment = profit * 0.20;
    const savings = profit * 0.10;
    const expenses = profit * 0.30;
    const debtRepayment = profit * 0.40;

    // Create a new row in the table
    const table = document.getElementById('results');
    const row = table.insertRow();
    
    // Insert cells in the new row
    row.insertCell(0).innerText = date;
    row.insertCell(1).innerText = income.toFixed(2);
    row.insertCell(2).innerText = cost.toFixed(2);
    row.insertCell(3).innerText = profit.toFixed(2);
    row.insertCell(4).innerText = investment.toFixed(2);
    row.insertCell(5).innerText = savings.toFixed(2);
    row.insertCell(6).innerText = expenses.toFixed(2);
    row.insertCell(7).innerText = debtRepayment.toFixed(2);
}
