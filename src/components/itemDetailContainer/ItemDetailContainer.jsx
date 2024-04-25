import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import ItemDetail from '../itemDetail/ItemDetail';
import { ClockLoader} from 'react-spinners';
import { db } from '../../config/firebase';
import { doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {
    const [loading, setloading] = useState(true);
    const [product,SetProduct] = useState({});
    const {productId} = useParams();

    useEffect(() =>{
        setloading(true)

        const getProducts = async() => {
            const queryRef = doc(db, 'productos', productId)

            const response = await getDoc(queryRef);

            const newItem = {
                ...response.data(),
                id: response.id
            }
            SetProduct(newItem);
            setloading(false);
        }
        getProducts();
        
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