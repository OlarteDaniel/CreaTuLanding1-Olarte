import React, {useState, useEffect} from 'react'
import { getProducts, getProductsByCategory } from '../../data/asyncMock';
import ItemList from '../itemList/ItemList';
import './ItemListContainer.css';
import { Link, useParams } from 'react-router-dom';
import ItemSelector from '../itemSelector/ItemSelector';
import { ClockLoader} from 'react-spinners';


const ItemListContainer = (props) => {
    const [loading, setloading] = useState(true);
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    useEffect(() =>{
        setloading(true)

        const dataProducts = categoryId ? getProductsByCategory(categoryId) : getProducts()
        dataProducts
        .then((el) => setProducts(el))
        .catch((error) => console.log(error))
        .finally(() => setloading(false))
        
    }, [categoryId]);

    return (
        <div className='contenedor-productos'>
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
                <>
                    <div className="top">
                        <h1 className='titulo'>{props.titulo}</h1>
                        <ItemSelector/>
                    </div>
                    <ItemList products={products} />
                </>
            }
        </div>
    )
}

export default ItemListContainer