// we import createSlice because we are creating a slice of the Redux store for cart management using Redux Toolkit's createSlice function.
// This slice will handle actions related to adding, removing, and updating items in the shopping cart.

// We define the cartSlice using createSlice function from Redux Toolkit.
// The slice is named 'cart' and has an initial state with items, totalAmount, and totalQuantity.
// The reducers defined here include addToCart, removeFromCart, increaseQuantity, decreaseQuantity, and clearCart.
// Each reducer updates the state based on the action dispatched.
// Finally, we export the actions and the reducer for use in the Redux store.

// we create functions to handle cart actions and we update the state accordingly.
// we pass state and action as parameters to each reducer function and we are sable to access it because Redux Toolkit uses Immer library under the hood which allows us to write "mutating" logic in reducers.
// action.payload contains the new item to be added to the cart.
 
//state.items is to checked to see if the item already exists in the cart.
//items is an array of objects where each object represents an item in the cart.

// we check if an item with the same id already exists in the cart.

// quantity and totalPrice was defined in the Cart.jsx file and we able to access them because they are part of the state.
// If the item already exists, we increase its quantity and update the total price.

// we recalculate the total price based on the updated quantity.

// If the item does not exist, we add it to the cart with initial quantity and total price.

 
// we create functions to handle cart actions and we update the state accordingly.
// we update the total quantity of items in the cart by summing up the quantities of all items.

// we use reduce method to sum up the total price of all items in the cart.

// we create functions to handle cart actions and we update the state accordingly.


import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
    totalQuantity: 0,
  },
  reducers: {
 
    addToCart: (state, action) => {

      const newItem = action.payload;


      const existingItem = state.items.find(

        (item) => item.id === newItem.id
      );

      if (existingItem) {

      
        existingItem.quantity += newItem.quantity || 1;

        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          quantity: newItem.quantity || 1,
          totalPrice: newItem.price * (newItem.quantity || 1),
        });
      }
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price;
        state.totalQuantity = state.items.reduce(
          (total, item) => total + item.quantity,
          0
        );
        state.totalAmount = state.items.reduce(
          (total, item) => total + item.totalPrice,
          0
        );
      }
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price;
        state.totalQuantity = state.items.reduce(
          (total, item) => total + item.quantity,
          0
        );
        state.totalAmount = state.items.reduce(
          (total, item) => total + item.totalPrice,
          0
        );
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
