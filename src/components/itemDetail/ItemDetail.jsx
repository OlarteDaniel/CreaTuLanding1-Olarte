import React, { useContext ,useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import Swal from 'sweetalert2'

const ItemDetail = ({nombre, precio, categoria, stock, descripcion, img, id}) => {

    const [cantidad, setCantidad] = useState(0);

    const {addItem, cart} = useContext(CartContext)

    const onAdd = (quantity) => {

        const item = {
            id,
            stock,
            nombre,
            precio
        }
        addItem(item, quantity);
        setCantidad(cantidad+1);
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: `Agregaste ${quantity} productos al carrito`
        });
    }

    return (
        <div className='producto-detalles'>
            <div className="imagen">
                <p className='precio'>${precio}</p>
                <img src={img} alt={nombre}/>
            </div>
            <div className="informacion">
                <h1 className='nombre'>{nombre}</h1>
                <p className='descripcion'>{descripcion}</p>
                {
                    cantidad > 0 ? 
                    <Link className='direccion' to={'/cart'}>Ir al carrito</Link>:
                    <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
                }
            </div>
            
        </div>
    )
}

export default ItemDetail