
import productsJSON from "../data/productosJSON.json";


export const cartInitialState = {
    cart: []
};

export const cartReducer = (state, action) => {



    switch (action.type) {

        case '[CART] Add Product':

            let newProduct = productsJSON.find(p => p.id === action.payload);
            let productInCart = state.cart.find(p => p.id === newProduct.id);

            return productInCart ?
                {
                    ...state, 
                    cart: [...state.cart.map((p) => p.id === newProduct.id ? { ...p, cantidad: p.cantidad + 1 } : p)]
                }
                :
                {
                    ...state,
                    cart: [...state.cart, {...newProduct, cantidad: 1}]
                }



        case 'NoN':
            throw new Error('Action.type NoN no esta implementado')
            break;

        default:
            return state;
    }

}