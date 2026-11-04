
import React, { useState, useMemo } from 'react'

let products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 2000 },
    { id: 4, name: "Monitor", price: 12000 },
    { id: 5, name: "Mobile", price: 25000 }
]

let filterProducts = (products, search) => {

    console.log( "Filtering Products..." )

    return products.filter( (product) =>
        product.name.toLowerCase().includes( search.toLowerCase() )
    )
}

const App = () => {

    let [ search , setSearch ] = useState( "" )
    let [ count , setCount ] = useState( 0 )

    let filteredProducts = useMemo( () => {
        return filterProducts( products, search )
    }, [ search ] )

    return (
        <>
            <h2>Product Search</h2>

            <input
                type="text"
                placeholder="Search Product"
                value={ search }
                onChange={ (e) => setSearch( e.target.value ) }
            />

            <h3>Counter: { count }</h3>

            <button onClick={ () => setCount( count + 1 ) }>
                Increment
            </button>

            <h3>Product List</h3>

            <ul>
                { filteredProducts.map( (product) => (
                    <li key={ product.id }>
                        { product.name } - ₹{ product.price }
                    </li>
                )) }
            </ul>
        </>
    )
}

export default App ;
