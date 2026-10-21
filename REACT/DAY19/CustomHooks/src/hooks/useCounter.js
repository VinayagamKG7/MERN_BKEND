import { useState } from "react"

const useCounter = (initValue = 1 , step = 0) =>{

    const [count , setCount] = useState(initValue) ;

    const increment = () => {
        setCount( (prev) => prev + step )
    }

    const decrement = () => {
        setCount( (prev) => prev - step )
    }

    const reset = () => {
        setCount( initValue ) ;
    }

    return { count , increment , decrement ,reset}
    
}

export default useCounter ;

