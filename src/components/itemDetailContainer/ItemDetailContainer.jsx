import React, { useEffect, useState } from 'react'
import { getProductsById } from '../../data/asyncMock';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import ItemDetail from '../itemDetail/ItemDetail';
import { ClockLoader} from 'react-spinners';


const ItemDetailContainer = () => {
    const [loading, setloading] = useState(true);
    const [product,SetProduct] = useState({});
    const {productId} = useParams();

    useEffect(() =>{
        setloading(true)

        getProductsById(productId)
        .then((el) => SetProduct(el))
        .catch((error) => console.log(error))
        .finally(() => setloading(false))
        
    },[]);

    return (
        <div className='contenedor-detalles'>
            {
                loading?
                <ClockLoader
                    color={"#DC2A32"}
                    loading={loading}
                    size={250}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                :
                <ItemDetail {...product}/>
            }
            
        </div>
    )
}

export default ItemDetailContainer