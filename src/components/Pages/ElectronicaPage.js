import React, { useContext, useReducer, useState } from 'react'
import { shoppingInitialState, shoppingReducer } from '../../reducers/shoppingReducer';
import { ProductItem } from './ProductItem';
import { TYPES } from '../../actions/shoppingAction';
import { toast } from 'react-toastify';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';


export const ElectronicaPage = () => {

  const {setCantProdCart} = useContext(ShoppingCartContext);



  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const [contadorCarrito, setContadorCarrito] = useState(0);
  const { productos, carrito } = state;

  const addToCart = (id, opcion) => {
      console.log("objectxs");
      dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  
      setContadorCarrito(contadorCarrito + 1);
      setCantProdCart(contadorCarrito + 1);
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




  const notify = () => {
    toast.success("Producto añadido al carrito", {
        position: toast.POSITION.TOP_CENTER
    });
};

  return (
    <div>

      <div className='title-container'>
        <h2>Electrónica</h2>
      </div>


    
  
      <div className='products-container'>

        <article className='box grid-responsive'>
          {
            productos.map((prod) => <ProductItem key={prod.id} data={prod} addToCart={addToCart} />)
          }
        </article>
        <h3>Carrito</h3>

      </div>

    </div>
  )
}