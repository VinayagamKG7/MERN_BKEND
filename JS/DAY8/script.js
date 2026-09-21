// Task 14 
let makepayment = amount => {

    return new Promise( (resolve , reject) => {

        if( amount > 0 ) resolve("Payment Succesfull") ;
        else reject( "Invalid Payment amount " ) ;

    } )
}

let result = makepayment(100) ;
result
.then( (sucess) => {
    console.log( sucess ) ;
} ).catch( (fail) => {
    console.log( fail ) ;
} )


// Task 7
let sales = [12000, 18000, 9500, 25000, 16000];

let highest = sales[0]
for( let key in sales ){
    if( sales[key] > highest ){
        highest = sales[key]
    }
}
console.log( `The highest sales amount is ${highest}` ) ;

// Task 11
let cart = [

{ name: "Shirt", price: 1000 },

{ name: "Shoes", price: 2500 },

{ name: "Bag", price: 1500 }

];

let total = cart.reduce( (acc , item) => {
    return acc + item.price ;
} , 0)
console.log( total ) ;


