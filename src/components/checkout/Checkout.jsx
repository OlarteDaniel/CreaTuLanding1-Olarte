import { addDoc, collection } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../../config/firebase';
import Context from '../../context/CartContext';
import './Checkout.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const [user, setUser] = useState({
        name:'',
        email:'',
        reapetedEmail:'',
        phone:''
    })
    const [emailMatch, setEmailMatch] = useState(false);
    const [validphone, setValidPhone] = useState(false);
    const {cart, getTotal, getQuantity, clearCartToIndex} = useContext(Context);

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name] : event.target.value
        }))
    }

    useEffect(() => {
        validateEmails();
        validatePhone();
    },[user.email, user.reapetedEmail, user.phone]);

    const navigate = useNavigate();

    const validateEmails = () => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(user.email === user.reapetedEmail && emailRegex.test(user.email)){
            setEmailMatch(true);
        }else{
            setEmailMatch(false);
        }
    }

    const validatePhone = () => {
        if(user.phone.length >= 8){
            setValidPhone(true);
        }else{
            setValidPhone(false);
        }
    }

    const allValidations = () => {
        if(emailMatch && validphone){
            getOrder();
        }else{
            Swal.fire({
                title: "Ups, hubo un error",
                text: "Verifique que sus datos esten ingresados correctamente",
                icon: "error"
            });
        }
    }

    const getOrder = async () => {
        const queryRef = collection(db, 'orders');
        try {
            const order = {
                buyer: user,
                cart: cart,
                total: getTotal()
            }
            
            const orderDocRef = await addDoc(queryRef, order);
            const orderId = orderDocRef.id;
            Swal.fire({
                title: "Gracias por tu compra",
                text: `El numero de orden de tu compra es: ${orderId}`,
                icon: "success"
            }).then(() => {
                clearCartToIndex();
                navigate('/');
            }).catch((error) => { console.log(error)});
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='checkout'>
            {
                getQuantity() > 0?
                <>
                    <h1 className='titulo'>Ingrese sus datos</h1>
                    <form className='formulario'>
                        <div className="inputBox">
                            <label>Nombre</label>
                            <input type="text" name='name' onChange={updateUser}/>
                        </div>
                        <div className="inputBox">           
                            <label>Email</label>
                            <input type="email" name='email' onChange={updateUser}/>
                        </div>
                        <div className="inputBox">
                            <label>Repetir Email</label>
                            <input type="email" name='reapetedEmail' onChange={updateUser}/>
                        </div>
                        <div className="inputBox">
                            <label>Telefono</label>
                            <input type="text" name='phone' onChange={updateUser}/>
                        </div>
                        <input className='btn' type="button" value="confirmar" onClick={allValidations}/>
                    </form>
                </>
                :
                <div className='vacio'>
                    <p>Su carrito esta vacio</p>
                    <Link to={'/'} className='direccion'>Ver productos</Link>
                </div>
            }
        </div>
    )
}

export default Checkout