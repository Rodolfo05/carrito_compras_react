import React, { useContext, useEffect, useReducer, useState } from 'react'
import productsJSON from "../../data/productosJSON.json";
import { ProductItem } from './ProductItem';
import { TYPES } from '../../actions/shoppingAction';
import { toast, ToastContainer } from 'react-toastify';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';

export const ElectronicaPage = () => {

  const [productsToList, setProductsToList] = useState([]);
  const { setCantProdCart, setProductsCart, cantProdCart, productsCart, state, dispatch } = useContext(ShoppingCartContext);

  useEffect(() => {
    inicializaPagina();
  }, [])

  const inicializaPagina = () => {

    const path = window.location.pathname;

    switch (path) {
      case "/electronica":
        let productosAListar = productsJSON.filter(p => p.id > 5 && p.id < 11);
        setProductsToList(productosAListar);
        console.log(productosAListar);
        break;

      default:
        break;
    }

  }

  useEffect(() => {
    // Aquí se puede acceder al estado actualizado
    setProductsCart(state);
  }, [state]);


  const addToCart = (idProduct, opcion) => {

    dispatch({ type: TYPES.ADD_TO_CART, payload: idProduct });
    setProductsCart(state);
    setCantProdCart(cantProdCart + 1);

    if (opcion !== 1) {
      notify();
    }
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


      <div className='container'>
        <div className='row'>
          {
            productsToList.map(
              (prod) =>
                <div className='col-sm-2 col-md-3'>
                  <ProductItem key={prod.id} data={prod} addToCart={addToCart} />
                </div>
            )
          }
        </div>
      </div>

      <ToastContainer
        autoClose={2000}
        hideProgressBar={false}
      />

    </div>
  )
}
