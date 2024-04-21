import React, { useEffect, useReducer, useState } from 'react'
import { TYPES } from '../actions/shoppingAction';
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducer';
import CartItem from './CartItem';
import NavBar from './NavBar';
import ProductItem from './ProductItem';
import $ from 'jquery';
import SideCarrito from './SideCarrito';
import ModalCart from './ModalCart';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { ElectronicaPage } from './Pages/ElectronicaPage';
import { VestuarioPage } from './Pages/VestuarioPage';


const notify = () => {

    toast.success("Producto añadido al carrito", {
        position: toast.POSITION.TOP_CENTER
    });

};

export const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const [contadorCarrito, setContadorCarrito] = useState(0);
    const { productos, carrito } = state;


    const addToCart = (id, opcion) => {

        dispatch({ type: TYPES.ADD_TO_CART, payload: id });

        setContadorCarrito(contadorCarrito + 1);

        if (opcion !== 1) {
            notify();
        }

    };

    const deleteFromCart = (id, e, cantidad) => {

        let itemInCart = state.carrito.find(item => item.id === id);

        if (itemInCart) {

            if (e == "borraUno") {
                dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
                setContadorCarrito(contadorCarrito - 1);
            } else {
                dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
                setContadorCarrito(contadorCarrito - cantidad);
            }

        }

    };

    const clearCart = () => {
        dispatch({ type: TYPES.CLEAR_CART })
        setContadorCarrito(0);
    };



    return (
        <div>

                  <a className="navbar-brand" href="#">
                        <img src="/image/ELECTROMARKET.png" className='imgLogo'/>
                    </a>

            <NavBar contadorCarrito={contadorCarrito} />


         



            <ModalCart contenido={carrito} addToCart={addToCart} delFromCart={deleteFromCart} />

            <h2 className='py-3'>Tecno</h2>

            <article className='box grid-responsive'>
                {
                    productos.map((prod) => <ProductItem key={prod.id} data={prod} addToCart={addToCart} />)
                }
            </article>
            <h3>Carrito</h3>

            <ToastContainer
                autoClose={5000}
                hideProgressBar={true}
            />

            <article className='box'>
                <button onClick={clearCart}>Limpiar Carrito</button>

                {
                    carrito.map(
                        (item, index) =>
                            <CartItem
                                key={index}
                                data={item}
                                delFromCart={deleteFromCart}
                            />
                    )
                }

            </article>



            {/* <SideCarrito/> */}


        </div>
    )
}

export default ShoppingCart;