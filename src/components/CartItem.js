import React from 'react'
let repetido = 1;
const CartItem = ({ data, delFromCart }) => {

    let {id, nombre, precio, cantidad} = data;

    return (
        <div style={{borderBottom: "thin solid gray"}}>
            <h4>{nombre}</h4>
            <h5>${precio} x {cantidad} = ${precio*cantidad}</h5>

            <button onClick={() => delFromCart(id, "borraUno")}>Eliminar de a uno</button>
            <button onClick={() => delFromCart(id, "borraTodo", cantidad)} >Eliminar todo</button>

            <br></br>
            <br></br>

        </div>
    )
}

export default CartItem