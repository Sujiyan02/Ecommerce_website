/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import img from "../assets/Images/slider2.jpg"
import { FaTrashAlt } from 'react-icons/fa'
import Modal from '../Components/Modal'
import ChangeAddress from '../Components/ChangeAddress'
import { decreseQuantity, increseQuantity, removeFromCart } from '../redux/cartSlice'
import {  useNavigate } from 'react-router-dom'

const Cart = () => {
    const cart =useSelector(state => state.cart);
    const [address,setAddress] =useState('main streer ,0012');
    const [ismodelOpen,setIsModelOpen] =useState(false);
    const dispatch =useDispatch();
    const navigate =useNavigate()
  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
      {cart.products.length > 0 ?
      <div>
        <h3 className='text-2xl font-semibold mb-4'>
            Shopping Cart
        </h3>
        <div className='flex flex-col md:flex-col-row justify-between space-x-10 mt-8'>
            <div className='md:w-2/3'>
                <div className='flex justify-between border-b items-center mb-4 text-xs font-bold'>
                    <p>PRODUCTS</p>
                    <div className='flex space-x-8'>
                        <p>PRICE</p>
                        <p>QUNTITY</p>
                        <p>SUBTOTAL</p>
                        <p>REMOVE</p>
                    </div>
                </div>
                <div>
                    {cart.products.map((product) => (
                        <div key={product.id}
                        className='flex  justify-between border-b items-center '>
                            
                            <div className='md:flex items-center space-x-4'>
                                <img src={product.image} alt={product.name} 
                                className='w-16 h-16 object-contain space-x-4' />
                                <div className='flex ml-4'>
                                    <h3 className='text-lg font-semibold'>{product.name}</h3>
                                </div>
                            </div>
                            <div className='flex items-center space-x-12'>
                                <p>${product.price}</p>
                                <div className='flex  items-center justify-center border'>
                                    <button className='text-xl font-bold px-1.5 border-r'
                                    onClick={() => dispatch(decreseQuantity(product.id))}>-</button>
                                    <p className='text-xl px-2'>{product.quantity}</p>
                                    <button className='text-lg px-1 border-l'
                                     onClick={() => dispatch(increseQuantity(product.id))}>+</button>
                                </div>
                                <p>{(product.quantity * product.price).toFixed(2)}</p>
                                <button className='text-red-500  hover:text-red-700'
                                onClick={() => dispatch(removeFromCart(product.id))}>
                                    <FaTrashAlt />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                    <h3 className='text-sm font-semibold mb-5'>
                        CART TOTAL
                    </h3>
                    <div className='flex   justify-between border-b pb-1'>
                        <span className='text-sm'>Total Items:</span>
                        <span>{cart.totalQuantity}</span>
                    </div>
                    <div  className=' border-b pb-2 mb-4'>
                        <p>Shipping:</p>
                        <p  className='ml-2'>Shipping To:</p>
                        <span  className='text-xs font-bold'>{address}</span>
                        <button  className='text-blue-500 hover:underline mt-1 ml-2 '
                        onClick={() => setIsModelOpen(true)}
                        >Change Address</button>
                    </div>
                    <div  className='flex   justify-between mb-4'>
                        <span>Total Price</span>
                        <span>{cart.totalPrice.toFixed(2)}</span>
                    </div >
                    <button  className='w-full bg-red-600 text-white py-2 hover:bg-red-800'
                    onClick={() => navigate('/checkout')}>Proceed To CheckOut</button>
                </div>

            </div>
        </div>
        <Modal ismodelOpen={ismodelOpen}
        setIsModelOpen={setIsModelOpen}>
            <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen} />
        </Modal>
      </div>
      :
      <div className='flex  justify-center'>
        <img src={img} alt=""  className='h-95'/>
      </div>
    }
    </div>
  )
}

export default Cart
