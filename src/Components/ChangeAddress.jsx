/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react'

const ChangeAddress = ({setAddress,setIsModelOpen}) => {
  const [newAddress,setNewAddress] = useState("");
  const onClose = () => {
   setAddress(newAddress)
   setIsModelOpen(false);
  }
  return (
    <div>
      <input type="text"
      placeholder='Enter new Address'
      className='border p-2 w-full mb-4'
      onChange={(e) => setNewAddress(e.target.value)} />
      <button className='bg-gray-500 text-white py-2 px-4 rounded-sm mr-2'
      onClick={() => setIsModelOpen(false)}>Cancel</button>
      <button className='bg-blue-500 text-white py-2 px-4 rounded-sm'
      onClick={onClose}
      >save Address</button>
    </div>
  )
}

export default ChangeAddress
