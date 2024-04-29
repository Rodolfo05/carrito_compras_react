import React, { useState } from 'react'
import { ShoppingCartContext } from './ShoppingCartContext'

const user = {
    id: 123,
    name: 'rodo'
}

export const ShoppingCartProvider = ({children}) => {

    const [cantProdCart, setCantProdCart] = useState(0);

    const [productsCart, setProductsCart] = useState([]);

  return (
    <ShoppingCartContext.Provider value={{cantProdCart, setCantProdCart, productsCart, setProductsCart}}>
        {children}
    </ShoppingCartContext.Provider>
  )
}
