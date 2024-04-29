import React, { useContext, useEffect, useReducer, useState } from 'react'
import { shoppingInitialState, shoppingReducer } from '../../reducers/shoppingReducer';
import { ProductItem } from './ProductItem';
import { TYPES } from '../../actions/shoppingAction';
import { ToastContainer, toast } from 'react-toastify';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import ModalCart from '../ModalCart';
import CartItem from '../CartItem';
import { cartReducer } from '../../reducers/cartReducer';


export const ElectronicaPage = () => {

  const initialState = [];

  //const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { setCantProdCart, setProductsCart } = useContext(ShoppingCartContext);

 


  const [contadorCarrito, setContadorCarrito] = useState(0);

  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  const { productos, carrito } = cartState;

  useEffect(() => {
    console.log(cartState); // Aquí puedes acceder al estado actualizado
  }, [cartState]);


//   const addToCart = (id, opcion) => {

//     dispatch({ type: TYPES.ADD_TO_CART, payload: id });

//     setContadorCarrito(contadorCarrito + 1);

//     if (opcion !== 1) {
//         notify();
//     }

// };

  const addToCart = (idProduct, opcion) => {
    console.log("add ", idProduct);
    // const action = {
    //   type : '[CART] Add Product',
    //   payload: {id: "hola", name: "chai"}
    // }

    // dispatch(action);

    dispatch({ type: TYPES.ADD_TO_CART, payload: idProduct });



    //dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    //let { productos, carrito } = state;

    //setProductsCart(carrito);


    setContadorCarrito(contadorCarrito + 1);
    setCantProdCart(contadorCarrito + 1);
 

    // if (opcion !== 1) {
    //   notify();
    // }

  };



  // const deleteFromCart = (id, e, cantidad) => {

  //   let itemInCart = state.productsCart.find(item => item.id === id);

  //   if (itemInCart) {

  //     if (e == "borraUno") {
  //       dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  //       setContadorCarrito(contadorCarrito - 1);
  //       setCantProdCart(contadorCarrito - 1);
  //     } else {
  //       dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
  //       setContadorCarrito(contadorCarrito - cantidad);
  //     }

  //   }

  // };

  // const clearCart = () => {
  //   dispatch({ type: TYPES.CLEAR_CART })
  //   setContadorCarrito(0);
  // };




  const notify = () => {
    toast.success("Producto añadido al carrito", {
      position: toast.POSITION.TOP_CENTER
    });
  };

  return (
    <div>

      <div className='title-container'>
        <h2>Electrónica</h2>
      </div>

<button onClick={() => addToCart(3,0)}>Hola</button>

{cartState.map(item => (
          <li key={item.id}>
            {item.name} 
          </li>
        ))}

      <div className='products-container'>

        <article className='box grid-responsive'>
          {/* {
            productos.map((prod) => <ProductItem key={prod.id} data={prod} addToCart={addToCart} />)
          } */}
        </article>

      </div>




      <ToastContainer
        autoClose={5000}
        hideProgressBar={true}
      />

      <article className='box'>
        {/* <button onClick={clearCart}>Limpiar Carrito</button> */}

        {/* {
          carrito.map(
            (item, index) =>
              <CartItem
                key={index}
                data={item}
                delFromCart={deleteFromCart}
              />
          )
        } */}

      </article>

    </div>
  )
}
