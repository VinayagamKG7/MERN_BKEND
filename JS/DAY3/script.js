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






