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
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Carro de compras</h1>

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="">

                            {
                                productsCart.cart ? productsCart.cart.length === 0 ?
                                    (
                                        <div>
                                            Tu bolsa esta vacía.
                                        </div>
                                    )
                                    :
                                    productsCart.cart.map((prod) => (
                                        <>

                                            <div className='divProdCart'>
                                                <div className='row'>

                                                    <div className='col-md-2'>
                                                        <img className="imgProductCart" src={prod.src}></img>
                                                    </div>

                                                    <div className='col-md-5 d-flex justify-content-start align-items-center'>
                                                        <p className='nameProductCart' key={prod.id}>{prod.nombre}</p>

                                                    </div>

                                                    <div className='col-md-2 d-flex justify-content-start align-items-center'>
                                                        <p style={{ position: "relative", top: "-6px" }}>${new Intl.NumberFormat('es-CL').format(prod.precio)}</p>
                                                    </div>


                                                    <div className='col-md-3 d-flex justify-content-start align-items-start'>
                                                        <button className='btnMoreLessCart' onClick={() => addToCart(prod.id)}>+</button>
                                                        <p className='d-flex' style={{ padding: "10px", position: "relative", top: "-6px" }}>{prod.cantidad}</p>
                                                        <button className='btnMoreLessCart' onClick={() => deleteFromCart(prod.id, "borraUno")}>-</button>
                                                    </div>
                                                </div>

                                                <div style={{ display: "none" }}>
                                                    {
                                                        total = total + (prod.precio * prod.cantidad)
                                                    }
                                                </div>


                                            </div>


                                            <div className='row pt-3'>
                                                <div className='col-md-7 d-flex justify-content-end align-items-center'>
                                                    <p className='text-total-cart'>Total: </p>

                                                </div>
                                                <div className='col-md-2 d-flex justify-content-center'>
                                                    <p className='text-total-cart'>${new Intl.NumberFormat('es-CL').format(total)}</p>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                    : null
                            }

                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="continuarCompra">Continuar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ModalCart