import React from 'react';
import Item from '../item/Item';
import './ItemList.css';

const ItemList = ({products}) => {
    return (
        <div className='list-group'>
            {products.map((prod) => {
                return <Item key={prod.id} {...prod}/>
            })}
        </div>
    )
}

export default ItemList