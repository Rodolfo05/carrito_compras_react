import React from 'react'

export const ProductItem = ({ data, addToCart }) => {

    let { id, nombre, precio, src } = data;




    return (

        <div className="card cardProduct mb-4">

            <div className='cardImg'>
                <img src={src} className="cardImagen" alt="..."></img>
            </div>

            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <h5 className="priceProduct">${new Intl.NumberFormat('es-CL').format(precio)}</h5>
                <button className="btnAddCart btn btn-primary" onClick={() => addToCart(id, 2)}>Agregar al carro</button>
            </div>
        </div>


    )
}




