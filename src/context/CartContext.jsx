import React, { useState } from "react";
import { createContext } from "react";
import Swal from "sweetalert2";

const Context = createContext();

export const CartContextProvider =  ({children}) =>{
    const [cart, setCart] = useState([]);

    const addItem = (productToAdd, quantity) =>{
        const newProduct = {
            ...productToAdd,
            quantity
        }
        if(isInCart(newProduct.id)){
            const actualizarCantidad = (cart.map((producto) => {
                if(producto.id === newProduct.id) {
                    return{...producto, quantity: producto.quantity + newProduct.quantity}
                }
                return producto
            }))
            setCart(actualizarCantidad);
        }else{
            setCart([...cart,newProduct]);
        }
    }

    const isInCart = (id) => {
        return cart.some((el) => el.id === id);
    }

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
    }

    const getQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    }

    const clearCart = () => {
        Swal.fire({
            title: "Estas seguro?",
            text: "No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#28a745",
            cancelButtonColor: "#dc3545",
            confirmButtonText: "Sí, vacialo!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Eliminado!",
                    text: "Tu carrito ha sido vaciado.",
                    icon: "success"
                });
                setCart([]);
            }
        });
    }

    const clearCartToIndex = () => {
        setCart([]);
    }

    const removeItem = (id) => {
        const carritoActualizado = cart.filter((el) => el.id !== id);
        setCart([...carritoActualizado])
    }


    return(
        <Context.Provider
            value={{
                cart,
                setCart,
                addItem,
                getTotal,
                getQuantity,
                clearCart,
                removeItem,
                clearCartToIndex,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Context;