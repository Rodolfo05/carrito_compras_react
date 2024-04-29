import { useContext } from "react";
import { TYPES } from "../actions/shoppingAction";
import productosJSON from "../data/productosJSON.json";


export const shoppingInitialState = {
    productos: productosJSON,
    carrito: []
};

//Funcion que recibe un estado y un objeto que son las acciones que van a cumplir
export function shoppingReducer(state, action) {

    let rep = 1;

    switch (action.type) {

        case TYPES.ADD_TO_CART: {

            let newItem = state.productos.find(producto => producto.id === action.payload);
         
            let itemInCart = state.carrito.find(item => item.id === newItem.id);

            return itemInCart ?
                {
                    ...state,
                    carrito: state.carrito.map((item) => item.id === newItem.id ? { ...item, cantidad: item.cantidad + 1 } : item)
                }
                :
                {
                    ...state,
                    carrito: [...state.carrito, { ...newItem, cantidad: 1 }]
                }

        }
        case TYPES.REMOVE_ONE_FROM_CART: {

            let itemInCart = state.carrito.find(item => item.id === action.payload);

            let carritoNuevo;

            if(itemInCart.cantidad == 1){
                carritoNuevo = state.carrito.filter((item) => item.id !== itemInCart.id);

                return{
                    ...state, carrito: carritoNuevo
                }
    
            }else{
                 return{
                    ...state,
                    carrito: state.carrito.map((item) => item.id === itemInCart.id ? { ...item, cantidad: item.cantidad - 1 } : item)
                }
            }

            // let itemToDelete = state.carrito.find(item => item.id === action.payload);

            // return itemToDelete.cantidad > 1 ? {
            //     ...state,
            //     carrito: state.carrito.map((item) => item.id === action.payload ? { ...item, cantidad: item.cantidad - 1 } : item)
            // }: {
            //     ...state, carrito: state.carrito.filter(item => item.id !== action.payload)
            // };

        
        
        }
        case TYPES.REMOVE_ALL_FROM_CART: {

            let itemInCart = state.carrito.find(item => item.id === action.payload);

            let carritoNuevo;
            carritoNuevo = state.carrito.filter((item) => item.id !== itemInCart.id);

            return{
                ...state,
                carrito: carritoNuevo
            }

            // return{
            //     ...state,
            //     carrito: state.carrito.filter(item => item.id !== action.payload)
            // }

        }
        case TYPES.CLEAR_CART: {

            return shoppingInitialState;

        }
        default:
            return state;
    }
}
