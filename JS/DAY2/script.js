// Task 1 

for( let i = 1 ;i<=10 ; i++ ){
    console.log( i ) ;
}

// Task 2 

for( let i = 1 ; i<=20 ; i++ ){

    if( i % 2 == 0 ) console.log( i ) ;
}

// Task 3 

let num = 5 ;

for( let i = 1 ; i<=10 ; i++ ){
    console.log( ` ${num} * ${i} = ${num*i} ` ) ;
}

// Task 4 

for( let i = 1 ; i<=5 ; i++ ){
    let str = ""

    for( let j = 1; j<=i ; j++ ){
        str += '*'
    }
    console.log( str ) ;
}

// Task 5 ;

for( let a = 1 ;a <= 5 ;a++ ){
    let str_emp = ""

    for( let b = 1 ; b <= a  ; b++ ){
        str_emp += b ;
    }
    console.log( str_emp );
}