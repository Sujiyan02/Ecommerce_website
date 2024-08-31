/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

const Login = ({openSignup}) => {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>
        Login
      </h2>
      <form action="">
        <div className='mb-4'>
            <label htmlFor="" className='block text-gray-700'>Email</label>
            <input type="email" className='w-full px-3 py-2 border'
            placeholder='Enter Email'/>
        </div>

        <div className='mb-4'>
            <label htmlFor="" className='block text-gray-700'>Password</label>
            <input type="password" className='w-full px-3 py-2 border'
            placeholder='Enter Password' />
        </div>

        <div className='mb-4 flex items-center justify-between'>
            <label htmlFor="" className='inline-flex item-center'>
                <input type="checkbox" className='form-checkbox' />
                <span className='ml-2 text-gray-700'>Remember Me</span>
                
            </label>
            <a href="#" className='text-red-800'>Forget Password</a>
        </div>
        <div>
            <button className='bg-red-600 w-full text-white py-2'>Login</button>
        </div>
      </form>
      <div className='text-center'>
        <span className='text-gray-800'>Don't Have An Account</span>
        <button className='text-red-800'onClick={openSignup}>Sign Up</button>
      </div>
    </div>
  )
}

export default Login
