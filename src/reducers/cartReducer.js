
import productsJSON from "../data/productosJSON.json";

export const cartInitialState = {
    cart: []
}

export const cartReducer = (initialState = cartInitialState, action) => {

    switch (action.type) {
        case '[CART] Add Product':
        console.log("entraca");
            let newProduct = productsJSON.find(p => p.id == action.payload);

            console.log(newProduct);
  
            return [...initialState, action.payload];

        case 'NoN':
            throw new Error('Action.type NoN no esta implementado')
            break;

        default:
            return initialState;
    }

}