import React, { useContext, useEffect, useState } from 'react'
import productsJSON from "../../data/productosJSON.json";
import { ProductItem } from './ProductItem';
import { TYPES } from '../../actions/shoppingAction';
import { toast, ToastContainer } from 'react-toastify';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import { useLocation } from 'react-router-dom';

export const ProductsPage = () => {

  let location = useLocation();

  const [productsToList, setProductsToList] = useState([]);
  const [categoryPage, setCategoryPage] = useState("");
  const { setCantProdCart, setProductsCart, cantProdCart, productsCart, state, dispatch } = useContext(ShoppingCartContext);

  useEffect(() => {
    inicializaPagina();
  }, [location])

  const inicializaPagina = () => {

    const path = window.location.pathname;
    let productosAListar;
   
    switch (path) {
      case "/electronica":
        productosAListar = productsJSON.filter(p => p.familia === "electrónica");
        setProductsToList(productosAListar);
        setCategoryPage("electrónica");
        break;
      case "/vestuario":
        productosAListar = productsJSON.filter(p => p.familia === "vestuario");
        setProductsToList(productosAListar);
        setCategoryPage("vestuario");
        break;
      case "/muebles":
        productosAListar = productsJSON.filter(p => p.familia === "muebles");
        setProductsToList(productosAListar);
        setCategoryPage("muebles");
        break;
      case "/deportes":
        productosAListar = productsJSON.filter(p => p.familia === "deportes");
        setProductsToList(productosAListar);
        setCategoryPage("deportes");
        break;
      case "/dormitorio":
        productosAListar = productsJSON.filter(p => p.familia === "dormitorio");
        setProductsToList(productosAListar);
        setCategoryPage("dormitorio");
        break;
      case "/juguetes":
        productosAListar = productsJSON.filter(p => p.familia === "juguetes");
        setProductsToList(productosAListar);
        setCategoryPage("juguetes");
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
        <h2>{categoryPage}</h2>
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
