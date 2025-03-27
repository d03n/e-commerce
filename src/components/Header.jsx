import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='grid grid-cols-12 bg-gray-200 h-15 px-16 items-center'>
      <div className='col-span-2'><NavLink to={'/'}>Home</NavLink></div>
      <div className='col-span-2'>Products</div>
      <div className='col-span-2'>Seller</div>
      <div className='col-span-2'>Cart</div>
    </div>
  )
}

export default Header
