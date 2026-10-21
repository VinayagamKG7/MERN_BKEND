
let transactions = [
    { type: "credit", amount: 2000, timestamp: 1 },
    { type: "debit", amount: 3000, timestamp: 2 },
    { type: "debit", amount: 6000, timestamp: 3 },
    { type: "credit", amount: 1000, timestamp: 4 },
    { type: "debit", amount: 2000, timestamp: 5 }
];

let balance = 5000;
let rejected = [];
let runningBalance = [];

transactions.sort((a, b) => a.timestamp - b.timestamp);

for (let transaction of transactions) {

    if (transaction.type === "credit") {
        balance += transaction.amount;
    }
    else if (transaction.type === "debit") {

        if (transaction.amount <= balance) {
            balance -= transaction.amount;
        }
        else {
            rejected.push(transaction);
            continue;
        }
    }

    runningBalance.push({
        ...transaction,
        balance: balance
    });
}

console.log("Running Balance:", runningBalance);
console.log("Final Balance:", balance);
console.log("Rejected Transactions:", rejected);
