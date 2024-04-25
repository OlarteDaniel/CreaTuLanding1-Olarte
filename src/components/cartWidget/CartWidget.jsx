import React, { useContext } from 'react'
import './CartWidget.css';
import { FaShoppingCart } from "react-icons/fa";
import CartContext from '../../context/CartContext';

const CartWidget = () => {

    const {getQuantity} = useContext(CartContext);

    return (
        <div className="carrito">
            <button className='btn-cart'>
            <FaShoppingCart className='cart'/>
            </button>
            <p>{getQuantity()}</p>
        </div>
    )
}

export default CartWidget