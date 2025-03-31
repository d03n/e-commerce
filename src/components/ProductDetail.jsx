import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const {prodId} = useParams();
  console.log(prodId);
  return (
    <div>
   </div>
  )
}

export default ProductDetail
