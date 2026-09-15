const createBankAccount = () => {

    let balance = 5000 ;

    return () => {
        console.log('Account Balance' ,balance) ;
    }
}

let balance = 10000 ;
balance += 200 ;


let checkBalance = createBankAccount() ;

checkBalance() ;

console.log('Outside balance' , balance ) ;



// Task 2 

// Program to Find the sum of digits of a number ;


// let num = 123456;
// let tot = 0;

// while (num > 0) {
//   let last = num % 10;
//   tot += last;
//   num = parseInt(num / 10);
// }

// console.log(tot);


// Explanation:

// num = 123456` → number whose digits we want to add.

// tot = 0` → stores the sum of the digits.

// num % 10` → gets the last digit of the number.

// tot += last` → adds the last digit to `tot`.

// parseInt(num / 10)` → removes the last digit.

// while (num > 0)` → repeats the process until the number becomes `0`.

// console.log(tot)` → prints the final sum.

// Output:
// 21




