/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const [billlingToggle,setBilllingToggle] =useState(true);
    const [shippingToggle,setShippingToggle] =useState(true);
    const [paymentToggle,setPaymentToggle] =useState(true);
const [paymentMethod,setPaymentMethod] = useState("cod");

const cart =useSelector(state => state.cart);

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4 uppercase">CheckOut</h3>
      <div className="flex flex-col md:flex-col-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border p-2 mb-6">
            <div
              className="flex  justify-between items-center"
              onClick={() => setBilllingToggle(!billlingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Billing Information{" "}
              </h3>
              {billlingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4  ${billlingToggle ? "" : "hidden"}`}>
              <label htmlFor="" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                className="w-full px-3 py-2 border"
              />
            </div>
            <div className={`space-y-4  ${billlingToggle ? "" : "hidden"}`}>
              <label htmlFor="" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="w-full px-3 py-2 border"
              />
            </div>
            <div className={`space-y-4  ${billlingToggle ? "" : "hidden"}`}>
              <label htmlFor="" className="block text-gray-700">
                Phone{" "}
              </label>
              <input
                type="text"
                name="Phone "
                placeholder="Enter Phone Number"
                className="w-full px-3 py-2 border"
              />
            </div>
          </div>

          <div className="border p-2 mb-6">
            <div
              className="flex  justify-between items-center"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Shipping Information{" "}
              </h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4  ${shippingToggle ? "" : "hidden"}`}>
              <label htmlFor="" className="block text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="Address"
                placeholder="Enter Address"
                className="w-full px-3 py-2 border"
              />
            </div>
            <div className={`space-y-4  ${shippingToggle ? "" : "hidden"}`}>
              <label htmlFor="" className="block text-gray-700">
                City
              </label>
              <input
                type="text"
                name="City"
                placeholder="Enter City"
                className="w-full px-3 py-2 border"
              />
            </div>
            <div className={`space-y-4  ${shippingToggle ? "" : "hidden"}`}>
              <label htmlFor="" className="block text-gray-700">
                Pin Code{" "}
              </label>
              <input
                type="text"
                name="pincode "
                placeholder="Enter pincode Number"
                className="w-full px-3 py-2 border"
              />
            </div>
          </div>

          <div className="border p-2 mb-6">
            <div
              className="flex  justify-between items-center"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Payment Information{" "}
              </h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4  ${paymentToggle ? "" : "hidden"}`}>
              <div className='flex items-center mb-2'>
              
              <input
                type="radio"
                name="payment"
               checked ={paymentMethod === "cod"}
               onChange={() => setPaymentMethod ("cod")}
              />
              <label htmlFor="" className="block text-gray-700 ml-2">
                Cash On Delivery
              </label>
              </div>
            </div>
            <div className={`space-y-4  ${paymentToggle ? "" : "hidden"}`}>
              
            <div className='flex items-center mb-2'>
              
              <input
                type="radio"
                name="payment"
               checked ={paymentMethod === "dc"}
               onChange={() => setPaymentMethod ("dc")}
              />
              <label htmlFor="" className="block text-gray-700 ml-2">
               
               Debit Cart
              </label>
              </div>
              {paymentMethod === "dc" && (
                <div className='bg-gray-100 rounded-lg mb-4'>
                    <h3 className='text-xl font-semibold mb-4'>Debit Cart Information</h3>
                        <input type="text" placeholder='Enter Card Number'className='border p-2 w-full rounded' />
                    
                    <div className='mb-4'>
                        <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>Cart Holder Name</label>
                        <input type="text" className='border p-2 w-full rounded'placeholder='Enter Card Holder Name'/>
                    </div>
                 
                        <div className='mb-4'>
                            <label htmlFor=""className='block text-gray-700 font-semibold mb-2'>Expire Date</label>
                            <input type="text" name="" id=""className='border p-2 w-full rounded' placeholder='Enter Expiry Date'/>
                        </div>
                        <div className='mb-4'>
                        <label htmlFor=""className='block text-gray-700 font-semibold mb-2'>CVV</label>
                        <input type="text" name="" id=""className='border p-2 w-full rounded'placeholder='Enter CVV'/>

                        </div>
                    </div>
                    
                    
                    
              )}
            </div>
           
           
           
          </div>
        </div>
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
        <h3 className="text-2xl font-semibold mb-4 ">Order Summary</h3>
        <div className="space-y-4">
{cart.products.map((product,index) => (
    <div key={index} className="flex justify-between">
         <div className="
         flex items-center">
            <img src={product.image} alt="" className='w-16 h-16 object-contain rounded'/>
            <div className='ml-4'>
                <h3 className="text-md font-semibold  ">{product.name}</h3>
                <h3 className="text-gray-600 ">${product.price} X {product.quantity}</h3>
            </div>
         </div>
        </div>
))}
        </div>
        <div className='ml-4 border-t pt-4' >
            <span className='flex justify-between'>Total Price:</span>
            <span className='font-semibold'>${cart.totalPrice.toFixed(2)}</span>
        </div>
        <button className='w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800'>Place Order</button>
      </div>
     
        </div>
        
    </div>
  );
}

export default Checkout
