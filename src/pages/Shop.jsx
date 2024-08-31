// eslint-disable-next-line no-unused-vars
import React from 'react'
import ProductCart from './ProductCart'
import { useSelector } from 'react-redux'

const Shop = () => {
    const products =useSelector(state => state.products)
  return (

      <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
        <h2 className="text-2xl font-bold mb-6 text-center"> Shop</h2>
        <div className="grid grid-col-1 sm:grid-col-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {products.products.map((product,index) => (
            <div key={index}>
               
               <ProductCart product={product} />
            </div>
           
          ))}
        </div>
      </div>
  
  )
}

export default Shop
