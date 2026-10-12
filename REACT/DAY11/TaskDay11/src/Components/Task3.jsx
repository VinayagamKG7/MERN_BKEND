import React, { useState } from 'react'

const Task3 = () => {

    let [ product, setProduct ] = useState({
        name: "Laptop",
        price: 45000,
        stock: 10
    })

    return (
        <>
            <h1>Product Details</h1>

            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Brand: {product.brand}</p>

            <button onClick={() => setProduct({...product, price: 50000})}>
                Update Price
            </button>

            <button onClick={() => setProduct({...product, brand: "Dell"})}>
                Add Brand
            </button>
        </>
    )
}

export default Task3;