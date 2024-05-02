import React from 'react'

export const ProductItem = ({ data, addToCart}) => {

    let {id, nombre, precio, src} = data;


    

    return (
        <div className="cardProduct">
            
            <img className="imgProduct" src={src}></img>
            <h4 className="titleProduct">{nombre}</h4>
            <h5 className="priceProduct">${new Intl.NumberFormat('es-CL').format(precio)}</h5>

            <button className="btnAddCart btn btn-primary" onClick={() => addToCart(id, 2)}>Agregar al carro</button>
        </div>
    )
}




