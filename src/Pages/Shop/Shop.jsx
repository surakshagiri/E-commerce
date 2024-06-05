import React from 'react'
import {PRODUCT} from '../../Product'
import Product from './Product'
import './Shop.css'

const Shop = () => {
  return (
    <div className="shop">
        <div className="shopTitle">
            <h1>Gadgets Shop</h1>
        </div>
        <div className="products">
            {""}
            {PRODUCT.map((product)=>(
        <Product data={product} />
        ))}</div>
    </div>
  )
}

export default Shop