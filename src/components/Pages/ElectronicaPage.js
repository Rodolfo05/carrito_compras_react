import React, { useContext, useEffect, useReducer, useState } from 'react'
import productsJSON from "../../data/productosJSON.json";
import { ProductItem } from './ProductItem';
import { TYPES } from '../../actions/shoppingAction';
import { toast, ToastContainer } from 'react-toastify';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import { cartReducer, cartInitialState } from '../../reducers/cartReducer';



export const ElectronicaPage = () => {

  const { setCantProdCart, setProductsCart, cantProdCart, productsCart, state, dispatch} = useContext(ShoppingCartContext);

 // const [cartState, dispatch] = useReducer(cartReducer, cartInitialState);

  useEffect(() => {
 // Aquí se puede acceder al estado actualizado
 setProductsCart(state);
    //console.log("eletro page: "+JSON.stringify(cartState.cart));
    //console.log("context: "+JSON.stringify(productsCart));
  }, [state]);

  useEffect(() => {
    // Aquí se puede acceder al estado actualizado

    console.log("context: "+JSON.stringify(productsCart));
     }, [productsCart]);


  const addToCart = (idProduct, opcion) => {

    dispatch({ type: TYPES.ADD_TO_CART, payload: idProduct });

    setProductsCart(state);
    setCantProdCart(cantProdCart + 1);


    if (opcion !== 1) {
      notify();
    }

  };



  // const deleteFromCart = (id, e, cantidad) => {

  //   let itemInCart = state.productsCart.find(item => item.id === id);

  //   if (itemInCart) {

  //     if (e == "borraUno") {
  //       dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  //       setContadorCarrito(contadorCarrito - 1);
  //       setCantProdCart(contadorCarrito - 1);
  //     } else {
  //       dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
  //       setContadorCarrito(contadorCarrito - cantidad);
  //     }

  //   }

  // };

  // const clearCart = () => {
  //   dispatch({ type: TYPES.CLEAR_CART })
  //   setContadorCarrito(0);
  // };


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

   <div>
    ProductCart
    {JSON.stringify(productsCart)}
   </div>

   <div>
   CarductCart
    {JSON.stringify(state)}
   </div>

   <div>
    state
    {JSON.stringify(state)}
   </div>

      <button onClick={() => addToCart(3, 0)}>Hola</button>

      <div className='products-container'>

        <article className='box grid-responsive'>
          {
            productsJSON.map((prod) => <ProductItem key={prod.id} data={prod} addToCart={addToCart} />)
          }
        </article>

      </div>




      <ToastContainer
        autoClose={2000}
        hideProgressBar={false}
      />

      <article className='box'>
        {/* <button onClick={clearCart}>Limpiar Carrito</button> */}

        {/* {
          carrito.map(
            (item, index) =>
              <CartItem
                key={index}
                data={item}
                delFromCart={deleteFromCart}
              />
          )
        } */}

      </article>

    </div>
  )
}
