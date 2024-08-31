/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const OrdersConfirmations = ({order}) => {
  return (
  
    
    <div>
      <h2>Thanks you for your Order</h2>
      <p>Your Order is placed successfullly you will recieve an email comes to you</p>
      <div>
        <h3> Order Summary</h3>
        <p>Order Number : {order.orderNumber}</p>
        <div>
          <h2>Shipping Information</h2>
          {/* <p>{order.shippingInfo.address}</p>
          <p>{order.shippingInfo.city}</p>
          <p>{order.shippingInfo.zip}</p> */}


        </div>
        <div>
          <h3>Product Ordered</h3>
          <p>{order.products}</p>
        </div>

      </div>
      </div>
  )
}




export default OrdersConfirmations
