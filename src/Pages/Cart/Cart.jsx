import React, { useContext } from 'react'
import { PRODUCT } from '../../Product'
import ShopContext from '../../Context/Shop_Context'
import CartItem from './CartItem'
import './Cart.css'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const { cartItems, getTotalCartAmount }= useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()
  return (
    <div className ="Cart">
      <div>
         <h1>Your Cart Items</h1>
         </div>
         <div className = "cartItems">

          {PRODUCT.map((Product) =>{
            if (cartItems[Product.id] !==0){
              return <CartItem data={Product} />
            }
          })}
         </div>

         {totalAmount > 0 ?
         <div className = "checkout">
            <p>Subtotal:Rs.{totalAmount}</p>
            <button onClick={(()=>navigate("/"))}>Continue Shopping</button>
            <button>Checkout</button>
         </div>
        : <h1>Your Cart is Empty </h1> }
    </div>
  )
}

export default Cart