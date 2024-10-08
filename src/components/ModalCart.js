import React, { useContext, useEffect, useReducer } from 'react'
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { TYPES } from '../actions/shoppingAction';


const ModalCart = ({ contenido, delFromCart }) => {

    const { cantProdCart, setCantProdCart, productsCart, setProductsCart, state, dispatch } = useContext(ShoppingCartContext);

    let total = 0;

    useEffect(() => {
        // Aquí se puede acceder al estado actualizado
        setProductsCart(state);
    }, [cantProdCart]);

    const addToCart = (idProduct) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: idProduct });

        setProductsCart(state);
        setCantProdCart(cantProdCart + 1);
    };



    const deleteFromCart = (id, e, cantidad) => {

        let productInCart = productsCart.cart.find(item => item.id === id);

        if (productInCart) {
            if (e == "borraUno") {
                dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
                setCantProdCart(cantProdCart - 1);
            } else {
                dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
                setCantProdCart(cantProdCart - cantidad);
            }
        }
    };

    const clearCart = () => {
        dispatch({ type: TYPES.CLEAR_CART })
        setCantProdCart(0);
    };


    return (

        <div>

            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Carro</h1>

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="cart-modal">

                            {
                                productsCart.cart ? productsCart.cart.length === 0 ?
                                    (
                                        <div className='cart-empty-modal'>
                                            Tu bolsa esta vacía.
                                        </div>
                                    )
                                    :
                                    productsCart.cart.map((prod) => (
                                        <>

                                            <div className='modal-cart'>


                                                <div className='modal-cart-image'>
                                                    <img className="imgProductCart" src={prod.src}></img>
                                                </div>

                                                <div className='modal-cart-name'>
                                                    <p className='nameProductCart' key={prod.id}>{prod.nombre}</p>
                                                </div>

                                                <div className='modal-cart-price'>
                                                    <p>${new Intl.NumberFormat('es-CL').format(prod.precio)}</p>
                                                </div>

                                                <div className='modal-cart-less-more'>
                                                    <button className='button-circle minus' onClick={() => deleteFromCart(prod.id, "borraUno")}></button>
                                                    <p className='d-flex'>{prod.cantidad}</p>
                                                    <button className='button-circle plus' onClick={() => addToCart(prod.id)}></button>
                                                </div>


                                                <div style={{ display: "none" }}>
                                                    {
                                                        total = total + (prod.precio * prod.cantidad)
                                                    }
                                                </div>


                                            </div>



                                        </>
                                    ))
                                    : null

                            }

                            <div className='row pt-3'>
                                <div className='col-md-7 d-flex justify-content-end align-items-center'>
                                    <p className='text-total-cart'>Total: </p>

                                </div>
                                <div className='col-md-2 d-flex justify-content-center'>
                                    <p className='text-total-cart'>${new Intl.NumberFormat('es-CL').format(total)}</p>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="button">Continuar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ModalCart