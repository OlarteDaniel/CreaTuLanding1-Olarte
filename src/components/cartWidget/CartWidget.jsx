import React from 'react';
import './CartWidget.css';
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <button className='btn-cart'>
            <FaShoppingCart className='cart'/>
        </button>
    )
}

export default CartWidget