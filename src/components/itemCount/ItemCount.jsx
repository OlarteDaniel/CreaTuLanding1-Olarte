import React from 'react'
import useCounter from '../../hooks/useCounter'
import './ItemCount.css';

const ItemCount = ({stock, initialValue, onAdd}) => {

    const {count, incrementar, decrementar} = useCounter(stock, initialValue);

    return (
        <div className='contador'>
            <div className="cantidad">
                <button onClick={decrementar}>-</button>
                <h2>{count}</h2>
                <button onClick={incrementar}>+</button>
            </div>
            <button className='btn-comprar' onClick={() => onAdd(count)}> Comprar</button>
        </div>
    )
}

export default ItemCount