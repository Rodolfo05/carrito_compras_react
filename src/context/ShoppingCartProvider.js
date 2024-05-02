import React, { useReducer, useState } from 'react'
import { ShoppingCartContext } from './ShoppingCartContext'
import { cartReducer } from '../reducers/cartReducer';

export const ShoppingCartProvider = ({ children }) => {


const cartInitialState = {
    cart: []
};

  const [cantProdCart, setCantProdCart] = useState(0);

  // Estado inicial carrito de compras
  const [productsCart, setProductsCart] = useState([]);
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  return (
    <ShoppingCartContext.Provider value={{ cantProdCart, setCantProdCart, productsCart, setProductsCart, state, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
