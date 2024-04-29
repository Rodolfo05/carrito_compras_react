import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useReducer, useState } from 'react'
import { Menu } from './Menu/Menu';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import ModalCart from './ModalCart';
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducer';
import { TYPES } from '../actions/shoppingAction';
import { toast } from 'react-toastify';


const NavBar = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const { setCantProdCart, productsCart } = useContext(ShoppingCartContext);


    

  const [contadorCarrito, setContadorCarrito] = useState(0);
  const { productos, carrito } = state;

  const notify = () => {
    toast.success("Producto añadido al carrito", {
      position: toast.POSITION.TOP_CENTER
    });
  };


  const addToCart = (id, opcion) => {
    console.log("add desde el nabbar");
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });

    setContadorCarrito(contadorCarrito + 1);
    setCantProdCart(contadorCarrito + 1);
    if (opcion !== 1) {
      notify();
    }

  };



  const deleteFromCart = (id, e, cantidad) => {

    let itemInCart = state.productsCart.find(item => item.id === id);

    if (itemInCart) {

      if (e == "borraUno") {
        dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
        setContadorCarrito(contadorCarrito - 1);
        setCantProdCart(contadorCarrito - 1);
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





    const { cantProdCart } = useContext(ShoppingCartContext);

    return (

        <>
            <nav className="navbar">

                <Menu />

                <div className='divCartIcon col-md-2 offset-md-5' style={{ width: "50px" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <FontAwesomeIcon className='carritoFont' icon={faCartShopping} /> <h2>{cantProdCart}</h2>
                </div>

                <div className='col-md-2'>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar producto" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>

            </nav>



            <ModalCart contenido={productsCart} addToCart={addToCart} delFromCart={deleteFromCart} />
        </>


    )
}

export default NavBar