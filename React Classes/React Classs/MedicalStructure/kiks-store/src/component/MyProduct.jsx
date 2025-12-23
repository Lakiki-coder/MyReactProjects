// we import createProduct from redux toolkit because we are creating a page specific slice here
import { createProduct } from "@reduxjs/toolkit";

// we are creating a slice for managing products in the cart

// initial state will be an object with a products array
// reducers which is the object that contains all the reducer functions, will have three actions: addProduct, removeProduct, updateQuantity
// reducer functions are used to update the state based on the action dispatched
const myProduct = createProduct({
    name: 'cart',
    initialState: {
        products: [],
    },
    reducers: {


        // state and action of  are passed automatically to the reducer functions
        // state represents the current state of the slice
        // action represents the action made dispatched by the user
        addProduct: (state, action) => {

            // we check if the product already exists in the cart
            // if it exists, we increase the quantity by 1
            // if it does not exist, we add the product to the cart with quantity 1
            const item = state.products.find(
                (product) => product.id === action.payload.id
            );
            if (!item) {
                state.products.push({ ...action.payload, quantity: 1 });
            } else {
                item.quantity += 1;
            }

                    },
            removeProduct: (state, action) => {

                // filter is used to remove the product from the cart and it is inmutables
                state.products = state.products.filter(
                    (product) => product.id !== action.payload.id
                );
            },
        updateQuantity: (state, action) => {
            const {item,quantity} = action.payload;
            const product = state.products.find(
                (product) => product.id === item.id
            );
            if(product){
                product.quantity = quantity;
            }
        },
    },
});
// we export the actions and the reducer
// actions are used to dispatch the actions to the store
export const { addProduct, removeProduct, updateQuantity } = myProduct.actions;

//we export the reducer to be used in the store because the store needs to know about the slice to manage its state
export default myProduct.reducer; 