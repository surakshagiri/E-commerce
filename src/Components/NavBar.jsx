import React from 'react'
import './NavBar.css'
import {Link} from "react-router-dom"
import { ShoppingCart } from "phosphor-react"
const NavBar = () => {
  return (
    <div className="navbar">
        <div className="links">
            <Link to ="/">Shop</Link>
            <Link to ="/cart">
                <ShoppingCart size={32} />
            </Link>
        </div>
    </div>
  )
}

export default NavBar