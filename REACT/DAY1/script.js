const getData = (callback) => {
   setTimeout(callback , 2000) 
}

const printData = () => {
    return "Hi" ; 
}

let result_new = getData( printData )
console.log( result_new ) ;




