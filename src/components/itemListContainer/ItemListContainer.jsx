import React, {useState, useEffect} from 'react'
import ItemList from '../itemList/ItemList';
import './ItemListContainer.css';
import { Link, useParams } from 'react-router-dom';
import ItemSelector from '../itemSelector/ItemSelector';
import { ClockLoader} from 'react-spinners';
import { db } from '../../config/firebase';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = (props) => {
    const [loading, setloading] = useState(true);
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    useEffect(() =>{
        setloading(true)

        const getData = async() =>{
            const queryRef = !categoryId ? collection(db,'productos') : query(collection(db,'productos'), where('categoria', '==',categoryId))

            const response = await getDocs(queryRef);

            const prod = response.docs.map((doc) => {
                const newObj = {
                    ...doc.data(),
                    id: doc.id
                }
                return newObj
            })

            setProducts(prod);
            setloading(false);
        }

        getData();
        
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