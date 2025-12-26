import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './features/api/productsApi';
import cartReducer from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
