

import productsJSON from "../data/productosJSON.json";
import { TYPES } from "../actions/shoppingAction";



export const cartReducer = (state, action) => {

    switch (action.type) {

        case TYPES.ADD_TO_CART: {

            let newProduct = productsJSON.find(p => p.id === action.payload);

            let productInCart = state.cart.find(p => p.id === newProduct.id);
            console.log({productInCart});
            return productInCart ?
                {
                    ...state, 
                    cart: state.cart.map((p) => p.id === newProduct.id ? { ...p, cantidad: p.cantidad + 1 } : p)
                }
                :
                {
                    ...state,
                    cart: [...state.cart, {...newProduct, cantidad: 1}]
                }


            }
        case TYPES.REMOVE_ONE_FROM_CART: {

                let productInCart = state.cart.find(item => item.id === action.payload);
    
                let newCart;
    
                if(productInCart.cantidad == 1){
                    newCart = state.cart.filter((item) => item.id !== productInCart.id);
    
                    return{
                        ...state, cart: newCart
                    }
        
                }else{
                     return{
                        ...state,
                        cart: state.cart.map((item) => item.id === productInCart.id ? { ...item, cantidad: item.cantidad - 1 } : item)
                    }
                }
            
            
            }
            case TYPES.REMOVE_ALL_FROM_CART: {
    
                let productInCart = state.cart.find(item => item.id === action.payload);
    
                let newCart;
                newCart = state.cart.filter((item) => item.id !== productInCart.id);
    
                return{
                    ...state,
                    cart: newCart
                }
    
            }
            case TYPES.CLEAR_CART: {
    
                return [];
    
            }
            default:
                return state;
        }
    }