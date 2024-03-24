import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id,nombre,precio,img}) => {
    return (
        <div className='producto'>
            <img src={img} alt={nombre}/>
            <p className='nombre'>{nombre}</p>
            <p className='precio'>${precio}</p>
            
            <Link to={`/product/${id}`} className='button-link'><button>Ver detalles</button></Link>
        </div>
    )
}

export default Item