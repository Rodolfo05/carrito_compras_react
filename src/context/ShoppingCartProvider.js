import React, { useState } from 'react'
import { ShoppingCartContext } from './ShoppingCartContext'

const user = {
    id: 123,
    name: 'rodo'
}

export const ShoppingCartProvider = ({children}) => {

    const [cantProdCart, setCantProdCart] = useState(0);

    // const setCantidadProd

  return (
    <ShoppingCartContext.Provider value={{cantProdCart, setCantProdCart}}>
        {children}
    </ShoppingCartContext.Provider>
  )
}
