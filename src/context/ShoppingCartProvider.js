import React, { useState } from 'react'
import { ShoppingCartContext } from './ShoppingCartContext'

export const ShoppingCartProvider = ({children}) => {

    const [cantProdCart, setCantProdCart] = useState(0);

    const [productsCart, setProductsCart] = useState([]);

  return (
    <ShoppingCartContext.Provider value={{cantProdCart, setCantProdCart, productsCart, setProductsCart}}>
        {children}
    </ShoppingCartContext.Provider>
  )
}
