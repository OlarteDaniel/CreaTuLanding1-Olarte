import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({nombre, precio, categoria, stock, descripcion, img}) => {

    const [cantidad, setCantidad] = useState(0);

    const onAdd = (quantity) => {
        setCantidad(cantidad+1);
        console.log(`Agregaste ${quantity} productos al carrito`);
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
                    <Link to={'/cart'}>Ir al carrito</Link>:
                    <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
                }
            </div>
            
        </div>
    )
}

export default ItemDetail