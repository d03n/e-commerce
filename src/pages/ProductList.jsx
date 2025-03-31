import React from 'react'

const ProductList = () => {
  const categories = ['Shirt', 'Pants', 'Shoes'];
  return (
    <div className='bg-gray-100 h-1000'>
      {
        categories.map((item) => {
          return (
            <div>
              {item}
            </div>
          )
        })
      }
      
    </div>
  )
}

export default ProductList
