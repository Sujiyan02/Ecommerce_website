/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux';
import ProductCart from "./ProductCart";

const filter = () => {
    const filterProduct = useSelector(state =>state.product.filterData)
  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
    <h2 className="text-2xl font-bold mb-6 text-center"> Shop</h2>
    <div className="grid grid-col-1 sm:grid-col-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
      {filterProduct.map((product,index) => (
        <div key={index}>
           
           <ProductCart product={product} />
        </div>
       
      ))}
    </div>
  </div>
  )
}

export default filter
