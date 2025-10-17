let income = +prompt("Enter your Monthly Income (e.g., 5000):");

let houserent = +prompt("Enter your Rent expense (e.g., 2000):");
let groceries = +prompt("Enter your Groceries expense (e.g., 1500):");
let transport = +prompt("Enter your Transport expense (e.g., 1000):");

let totalExpenses = houserent + groceries + transport;

let remainingBalance = income - totalExpenses;
let percentageSpent = (totalExpenses / income) * 100;

// If-Else: Check if total expenses exceed income
let message;
if (totalExpenses > income) {
    message = "Message: You are overspending.";
} else {
    message = "Message: You are within budget.";
}

// Alert: Display all results
let output = `
    --- Budget Planner Output ---

    Total Expenses: $${totalExpenses.toFixed(2)}
    Remaining Balance: $${remainingBalance.toFixed(2)}
    Percentage Spent: ${percentageSpent.toFixed(2)}%

    ${message}
`;

alert(output);