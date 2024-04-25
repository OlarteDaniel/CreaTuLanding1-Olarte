import React, { useContext } from 'react'
import './Cart.css';
import CartContext from '../../context/CartContext';
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cart, getTotal, clearCart, removeItem} = useContext(CartContext);
    
    if(cart.length === 0) {
        return(
            <div className='sinProductos'>
                <h1>Todavia no agregaste productos</h1>
                <Link to={'/'} className='direccion'>Ver productos</Link>
            </div>
        )
    }else{
        return(
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>SubTotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((prod) => (
                            <tr key={prod.id}>
                                <td>{prod.nombre}</td>
                                <td>{prod.quantity}</td>
                                <td>{prod.precio}</td>
                                <td>{prod.precio * prod.quantity}</td>
                                <td><button className='remover-item' onClick={() => removeItem(prod.id)}><FaTrash /></button></td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <th></th>
                    <th>Total de la compra: {getTotal()}</th>
                    <th><button className='vaciar-carrito' onClick={() => clearCart()}>Vaciar carrito</button></th>
                    <th><Link to='/checkout' className='btn-finalizar'>Finalizar compra</Link></th>
                    <th></th>
                </tfoot>
            </table>
        )
    }

    
}

export default Cart;