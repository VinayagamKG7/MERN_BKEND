let salaries = [15000, 20000, 25000, 30000, 35000];

let updatedSalaries = salaries.map(salary => salary + 2000);

console.log("Original Salaries:", salaries);
console.log("Updated Salaries:", updatedSalaries);

// Task 2
let marks = [35, 78, 42, 90, 25, 67, 55];

let eligibleStudents = marks.filter(mark => mark >= 50);

console.log("Eligible Students:", eligibleStudents);

// Task 3 

let products = [
    { id: 101, name: "Laptop", price: 55000 },
    { id: 102, name: "Mouse", price: 800 },
    { id: 103, name: "Keyboard", price: 1500 },
    { id: 104, name: "Monitor", price: 12000 }
];


let result = products.find(item => item.id === 103);

console.log(result);


console.log(result.name);


let cart = [
    { name: "Shirt", price: 1200 },
    { name: "Shoes", price: 2500 },
    { name: "Watch", price: 3000 },
    { name: "Bag", price: 1500 }
];

let total = cart.reduce((sum, item) => {
    return sum + item.price;
}, 0);

console.log(total);