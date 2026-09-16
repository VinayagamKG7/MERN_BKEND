// Task 1 
function createEmployee() {

    let salary = 20000;

    return (amount) => {
        salary = salary + amount;
        return salary;
    };
}

let updateSalary = createEmployee();

console.log(updateSalary(2000));
console.log(updateSalary(3000));
console.log(updateSalary(5000));


// Task 2 

function createStock() {

    let stock = 10;

    return {
        addStock: (quantity) => {
            stock = stock + quantity;
            return stock;
        },

        sellProduct: (quantity) => {

            if (quantity > stock) {
                return "Not enough stock";
            }

            stock = stock - quantity;
            return stock;
        }
    };
}

let product = createStock();

console.log(product.addStock(5));
console.log(product.sellProduct(3));
console.log(product.addStock(10));
console.log(product.sellProduct(8));
console.log(product.sellProduct(20));





let arr = [] ;

function display(){

  while( true ){
    
    let input = +prompt( "Enter a number :" , 0 )   
    if( input<0 ){
      break ;
    }
    else{
          arr.push( input ) ;
    }
  }
  return arr ;
}

let result = display().filter( elem => elem % 2 === 0 ).reduce( (acc , item) => {
  return acc + item ;
} , 0)

console.log( `The sum of even nos.is ${result}`) ;







