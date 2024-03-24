import React, { useState } from 'react'
import './ItemSelector.css'
import { Link } from 'react-router-dom'

const ItemSelector = () => {
    const [selectedOption, setSelectedOption] = useState('Camisetas');

    const handleChange = (event) => {
        const selectValue = event.target.value;
        setSelectedOption(selectValue);
    }

    return (
        <div className='filtrador'>
            <select className='selector' value={selectedOption} onChange={handleChange}>
                <option value='Camisetas' >Camisetas</option>
                <option value='Camperas' >Camperas</option>
                <option value='Chombas' >Chombas</option>
                <option value='Medias' >Medias</option>
                <option value='Shorts' >Shorts</option>
            </select>
            <Link to={`/category/${selectedOption}`}><button className='boton'>Buscar</button></Link>
        </div>
    )
}

export default ItemSelector